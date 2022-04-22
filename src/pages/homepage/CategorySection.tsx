import React, { useState } from "react";
const CategorySection = () => {

  let myState = {
    category: false
  }
  const [state, setState] = useState(myState);

  const dummyArray = [
    { name: 'Apex', count: '2' },
    { name: 'Dekau', count: '2' },
    { name: 'Heater', count: '2' },
    { name: 'Cello Tape with Band', count: '2' },
    { name: 'Soap', count: '2' },
    { name: 'Cup', count: '2' },
    { name: 'Food', count: '2' },
    { name: 'Apex', count: '2' },
    { name: 'Dekau', count: '2' },
    { name: 'Heater', count: '2' },
    { name: 'Cello Tape with Band', count: '2' },
    { name: 'Soap', count: '2' },
    { name: 'Cup', count: '2' },
    { name: 'Food', count: '2' },
    { name: 'Apex', count: '2' },
    { name: 'Dekau', count: '2' },
    { name: 'Heater', count: '2' },
    { name: 'Cello Tape with Band', count: '2' },
    { name: 'Soap', count: '2' },
    { name: 'Cup', count: '2' },
    { name: 'Food', count: '2' },
    { name: 'Apex', count: '2' },
    { name: 'Dekau', count: '2' },
    { name: 'Heater', count: '2' },
    { name: 'Cello Tape with Band', count: '2' },
    { name: 'Soap', count: '2' },
    { name: 'Cup', count: '2' },
    { name: 'Food', count: '2' },
  ];

  const openCategory = () => {
    setState({ category: !state.category });
  }

  return (
    <>
      <div className={`leftsidebar ${state.category ? 'showCategory' : null}`}>
        <ul className="m-0 p-0 w-100">
          {
            dummyArray.map(res => (
              <li className="categoryName" key={res.name}>{res.name} <span className="countName">{res.count}</span></li>
            ))
          }
        </ul>
        <div className="w-100 viewAllCategorios">
          View All Categories <i className="fa fa-arrow-right"></i>
        </div>
      </div>

      {!state.category && 
        <div className="categoryButton" onClick={openCategory}>
          <div className="catButton">
            <i className="fa fa-th-large"></i>
          </div>
          {/* <span className="categoriesText">Categories</span> */}
        </div>
      }
      <div className={`overlayleft ${state.category ? 'overlayShow' : null}`} onClick={openCategory}></div>
    </>
  );
};

export default CategorySection;
