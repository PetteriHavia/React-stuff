import React, { useEffect } from "react";
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';
import { useState } from "react";

function App() {
  //Normal javaScript here like functions and const
  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [name, setName] = useState("PH");

  useEffect(()=> {
    console.log('we run a function');
  },[]);


  return (
    <div className="App">
      <h1 className="title">Twitter Light</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;

