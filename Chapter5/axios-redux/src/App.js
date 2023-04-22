import "./App.css";
import React, { useEffect, useState } from "react";
//import CurrentWeather from "./components/CurrentWeather";
import {useSelector, useDispatch} from 'react-redux';
import Navigation from "./components/Navigation";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Increment</button>
      <Navigation />
      {isLogged && (
        <h1>We Are In</h1>
      )}
    </div>
  );
};

export default App;
