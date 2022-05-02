import React from "react";
import { useDispatch } from "react-redux";
import { getStoreData } from "../../store/account/action";
import { useTypedSelector } from "../../store/typeSelector";
import NavBar from "../Navbar";
function Header() {
  const dispatch = useDispatch();
  const data = useTypedSelector((state) => state.storeReducer);
  // console.log("dataa", data);
  React.useEffect(() => {
    dispatch<any>(getStoreData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default Header;
