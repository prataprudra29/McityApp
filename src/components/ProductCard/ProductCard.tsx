export default function ProductCard() {

  return (
    <div className="productContainer">
      <div className="list">
        <div className="heading">Apex <span>1</span></div>
        <ul className="m-0 p-0 productList">
          {
            [1, 2, 3].map(res => (
              <li className="d-flex justify-content-between">
                <div className="productarea">
                  <div className="productImg">
                    <img src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/4976955/073ffe51-1d3d-463d-9351-2a6d3a81d4ae/1642520809791-13ecb0a2-b8e2-40a5-8f78-972ddf6e500e.jpeg" alt="" />
                    <div className="offerArea">
                      70% OFF
                    </div>
                  </div>
                  <div className="productText">
                    <div className="productName fz18 py-1">Power Blender</div>
                    <div className="text-dark fz12 py-1">Per Piece</div>
                    <div className="text-dark py-1 fz20">₹90 <span className="notPrice lightColor fz14 ml-2">₹300</span></div>

                  </div>
                </div>
                <div className="itemarea">
                  <div className="productAdd">
                    <div className="countProduct">
                      <span className="countIcon"><i className="fa fa-minus"></i></span>
                      <span className="count">1</span>
                      <span className="countIcon"><i className="fa fa-plus"></i></span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          }
        </ul>


        <div className="heading">Dekau <span>1</span></div>
        <ul className="m-0 p-0 productList">
          {
            [1, 2, 2, 4, 4, 5, 6, 7].map(res => (
              <li className="d-flex justify-content-between">
                <div className="productarea">
                  <div className="productImg">
                    <img src="https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/4976955/073ffe51-1d3d-463d-9351-2a6d3a81d4ae/1642520809791-13ecb0a2-b8e2-40a5-8f78-972ddf6e500e.jpeg" alt="" />
                    <div className="offerArea">
                      70% OFF
                    </div>
                  </div>
                  <div className="productText">
                    <div className="productName fz18 py-1">Power Blender</div>
                    <div className="text-dark fz12 py-1">Per Piece</div>
                    <div className="text-dark py-1 fz20">₹90 <span className="notPrice lightColor fz14 ml-2">₹300</span></div>

                  </div>
                </div>
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
    </div>
  );
}
