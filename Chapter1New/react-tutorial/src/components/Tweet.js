import React from 'react';

const Tweet = (props) =>  {

    const deleteTweet = () => {
       props.setTweets(props.tweets.filter((individualElement) => individualElement !== props.message));
       console.log(props.message)
    }

    return(
        <div>
            <h2>Name:{props.name}</h2>
            <h3>{props.message}</h3>
            <button>Like</button>
            <button onClick={deleteTweet}>Delete</button>
            <h2>UUID Test</h2>
        </div>
    )
}

export default Tweet;