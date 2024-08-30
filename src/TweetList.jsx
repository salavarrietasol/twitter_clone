import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
    const reversedTweets = [...tweets].reverse();

    return (
      <div className="flex flex-col items-center p-4">
        {reversedTweets.length > 0 ? (
          reversedTweets.map((tweet) => (
            <div key={tweet.id} className="w-full max-w-md">
              <Tweet tweet={tweet} />
            </div>
          ))
        ) : (
          <p>¡Escribe algo, para empezar!</p>
        )}
      </div>
  );
};

export default TweetList;


