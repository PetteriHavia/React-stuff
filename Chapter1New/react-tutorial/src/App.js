import React from "react";
import TweetList from './components/TweetList'
import CreateTweet from './components/CreateTweet'
import { useState } from "react";

function App() {
  // Normal javaScript here like functions and const

  const [name, setName] = useState("PH");
  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList name={name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;

