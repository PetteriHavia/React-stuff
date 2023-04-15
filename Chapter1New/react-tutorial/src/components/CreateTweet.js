import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';

const CreateTweet = ({textInput, setTextInput, tweets, setTweets}) =>  {

   //Functions
   const userInputHandler = (e) => {
      setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
       e.preventDefault();
       setTweets([...tweets, {message: textInput, id: uuid() }]);
       setTextInput("");
    };

    return(
        <form onSubmit={submitTweetHandler}>
           <textarea value={textInput} onChange={userInputHandler}></textarea>
           <button>Submit</button>
        </form>
    )
}

export default CreateTweet;