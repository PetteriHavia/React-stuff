import React from "react";
//Components and pages
import Home from "./pages/home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="game/:id" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
