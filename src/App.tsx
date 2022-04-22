import React from "react";
import "./App.css";

// setting up redux
import {Provider} from "react-redux"
import store from "./store/rootReducer";
import Main from "./pages/Main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
