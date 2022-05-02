import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../store/typeSelector";
import { getStoreData, sideBarClickData } from "../../store/account/action";

const CategorySection = () => {
  let myState: any = {
    category: false,
    categories: [],
  };
  const [state, setState] = useState(myState);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch<any>(getStoreData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data: any = useTypedSelector((state) => state.storeReducer);
  console.log(data);

  const openCategory = (data: any) => {
    setState({ category: !state.category });
    dispatch<any>(sideBarClickData(data));
  };

  const categoryData = useMemo(() => {
    if (data) {
      setState({ ...state, categories: data?.storeData?.categories });
    }
  }, [data]);
  console.log("state", state);

  return (
    <>
      <div className={`leftsidebar ${state.category ? "showCategory" : null}`}>
        <ul className="m-0 p-0 w-100">
          {state?.categories &&
            state?.categories.map((res: any) => (
              <li className="categoryName" key={res.name}>
                {res.name} <span className="countName">{res.count}</span>
              </li>
            ))}
        </ul>
        <div className="w-100 viewAllCategorios">
          View All Categories <i className="fa fa-arrow-right"></i>
        </div>
      </div>

      {!state.category && (
        <div className="categoryButton" onClick={openCategory}>
          <div className="catButton">
            <i className="fa fa-th-large"></i>
          </div>
        </div>
      )}
      <div
        className={`overlayleft ${state.category ? "overlayShow" : null}`}
        onClick={openCategory}
      ></div>
    </>
  );
};

export default CategorySection;
