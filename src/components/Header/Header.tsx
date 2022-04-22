import React from "react";
import { useDispatch } from "react-redux";
import { getStoreData } from "../../store/account/action";
import NavBar from "../Navbar";
function Header() {
  const dispatch = useDispatch();

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
