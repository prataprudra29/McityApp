import React, { useState } from "react";
import {  useMemo } from "react";
import { useTypedSelector } from "../../store/typeSelector";


const ProductSection = () => {
  const data: any = useTypedSelector((state) => state.storeReducer);
  let myState: any = {
    category: false,
    productData: []
  };

  const [state, setState] = useState(myState);

  useMemo(() => {
    if (data && data?.storeData?.categories) {
      data?.storeData?.categories.map((category: any) => {
        category['products'] = [];
      })

      data?.storeData?.categories.map((category: any) => {
        if (data?.storeData?.products) {
          data?.storeData?.products.map((product: any) => {
            if (category.id == product.shopId) {
              category['products'].push(product);
            }
          })
        }
      })
      setState({ ...state, productData: data?.storeData?.categories });
    }
  }, [data])

  return (
    <>
      <div className="productContainer">
        <div className="list">
          {
            state.productData && state.productData.map((category: any) => (
              <div key={category.id}>
                <div className="heading">{category.name} <span>{category.products.length}</span></div>
                <ul className="m-0 p-0 productList">
                  {
                    category.products.length > 0 && category.products.map((product: any) => (
                      <li className="d-flex justify-content-between" key={product.id}>
                        <div className="productarea">
                          <div className="productImg">
                            <img src={product?.imageUrl} alt="" />
                            <div className="offerArea">
                              70% OFF
                            </div>
                          </div>
                          <div className="productText">
                            <div className="productName fz18 py-1">{product.itemName}</div>
                            <div className="text-dark fz12 py-1">Per Piece</div>
                            <div className="text-dark py-1 fz20">₹{product.productVariant[0].amount} <span className="notPrice lightColor fz14 ml-2">₹{product.productVariant[0].salePrice}</span></div>

                          </div>
                        </div>
                        {/* <div className="itemarea">
                          <div className="productAdd">
                            <div className="countProduct">
                              <span className="countIcon"><i className="fa fa-minus"></i></span>
                              <span className="count">1</span>
                              <span className="countIcon"><i className="fa fa-plus"></i></span>
                            </div>
                          </div>
                        </div> */}
                        <div className="itemarea">
                          <div className="productAdd">
                            <div className="addProduct">Add <i className="fa fa-plus"></i> </div>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }


        </div>
      </div>
    </>
  );
};

export default ProductSection;
