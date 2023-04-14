import React from 'react';
import Tweet from './Tweet';

const TweetList = (props) =>  {
    return(
        <div className="tweet-list">
          {props.tweets.map((tweet) => (
          <Tweet name={props.name} message={tweet} setTweets={props.setTweets} tweets={props.tweets}/>
          ))}
        </div>
    );
}

export default TweetList;