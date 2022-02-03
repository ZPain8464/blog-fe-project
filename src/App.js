import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import DisplayUsername from "./components/DisplayUsername";
import ArticlesContainer from "./components/ArticlesContainer";

const App = () => {
  return (
    <div className="App">
        <Nav />
        <DisplayUsername />
        <ArticlesContainer />
    </div>
  );
}

export default App;