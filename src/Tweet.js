import React from 'react';

const Tweet = ({arr}) => {
    
    console.log('here is the array of tweet', arr)
    return arr.map((tweet) => {

        const tweetText = decodeURI(tweet);

        return (
            
          <div className="ui blue segment" key={tweet}>
                <p>
                  {tweet}  
                </p>
                <a className="ui twitter button" href={`https://twitter.com/intent/tweet?text=${tweetText}`}>
                    <i className="twitter icon"></i>
                    Tweet Now
                </a>
            </div>
        );
    });
}

export default Tweet;