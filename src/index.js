import React, { Component } from "react";
import ReactDOM from "react-dom";

import GlobalStyles from "./components/GlobalStyle";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Info from "./components/Info";

function App() {
  return (<>
    <GlobalStyles />
    <NavBar />
    <Hero />
    <Info />
  </>);
}

ReactDOM.render(<App />, document.getElementById("root"));
