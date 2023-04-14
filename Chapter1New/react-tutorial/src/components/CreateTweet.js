import React from 'react';
import { useState } from 'react';

const CreateTweet = ({textInput, setTextInput, tweets, setTweets}) =>  {

    const submitTweetHandler = (e) => {
       e.preventDefault();
       setTweets([...tweets, textInput]);
       setTextInput('');
    }

    //Functions
    const userInputHandler = (e) => {
        //console.log(e)
        setTextInput(e.target.value);
    }

    return(
        <form onSubmit={submitTweetHandler}>
           <textarea value={textInput} onChange={userInputHandler}></textarea>
           <button>Submit</button>
           
        </form>
    )
}

export default CreateTweet;