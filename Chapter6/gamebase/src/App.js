import React from "react";
//Components and pages
import Home from "./pages/home";
import Navigation from "./components/Navigaton";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="game/:id" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
