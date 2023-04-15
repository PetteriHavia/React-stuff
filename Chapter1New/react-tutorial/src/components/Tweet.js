import React from 'react';
//import '../styles/Tweet.scss';

const Tweet = (props) =>  {
    
    const deleteTweet = () => {
       props.setTweets(props.tweets.filter((individualElement) => individualElement.id !== props.tweet.id));
       console.log(props.message)
    }

    return(
        <div className="tweet">
            <h2 className="title">Name:{props.name}</h2>
            <h3>{props.message}</h3>
            <button>Like</button>
            <button onClick={deleteTweet}>Delete</button>
        </div>
    )
}

export default Tweet;