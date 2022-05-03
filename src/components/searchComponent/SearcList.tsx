import { useMemo } from "react";
import { useTypedSelector } from "../../store/typeSelector";
export default function SearchList(props: any) {
  console.log("props", props);
  const data: any = useTypedSelector((state) => state?.storeReducer?.storeData);
  const productData = useMemo(() => {
    return data?.products;
  }, [data]);
  console.log("productData", productData);
  //create a new array by filtering the original array
  const filteredData =
    productData?.filter((el: any) => {
      //if no input the return the original
      if (props.input === "") {
        return el;
      }
      //return the item which contains the user input
      else {
        return el.itemName.includes(props.input);
      }
    }) || [];
  console.log("fileterd Data", filteredData);
  return (
    <ul>
      {filteredData.map((item: any) => (
        <li key={item.id}>{item.itemName}</li>
      ))}
    </ul>
  );
}
