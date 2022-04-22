const CartSection = () => {
  return (
    <>
      <div className="cartArea p-2">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="heading">Bag <span>1</span></div>
          <div className="clear cursor-pointer fz14 text-underline">Clear bag</div>
        </div>


        <div className="w-100 mt-2">
          <ul className="m-0 p-0 cartList">
            <li>
              <p className="fz14 m-0 p-0">Power Blender</p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <div className="text-dark py-1 fz14">₹90 <span className="notPrice lightColor fz12 ml-2">₹300</span></div>
                <div className="productAdd">
                  <div className="countProduct">
                    <span className="countIcon"><i className="fa fa-minus"></i></span>
                    <span className="count">1</span>
                    <span className="countIcon"><i className="fa fa-plus"></i></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>


        <div className="totalCart mt-4">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="text-dark py-1 fz18">Sub Total</div>
            <div className="fz14">₹90 </div>
          </div>

          <div className="w-100 mt-2">
            <button className="btn-custom w-100">Proceed to checkout</button>
          </div>
        </div>

      </div>
    </>
  );
};

export default CartSection;
