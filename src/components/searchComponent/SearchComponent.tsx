import * as React from "react";
import SearchList from "./SearcList";

export default function SearchComponent() {
  const [inputText, setInputText] = React.useState("");
  let inputHandler = (e: any) => {
    var lowerCase = e.target.value;
    console.log("lovwwer", lowerCase);
    setInputText(lowerCase);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for products..."
        onChange={inputHandler}
      />
      <div>
        <SearchList input={inputText} />
      </div>
    </>
  );
}
