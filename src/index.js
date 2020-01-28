import React, { Component } from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./components/GlobalStyle";
import NavBar from "./components/NavBar";

function App() {
  return (<>
    <GlobalStyles />
    <NavBar />
  </>);
}

ReactDOM.render(<App />, document.getElementById("root"));
