import React from 'react';
import Tweet from './Tweet';
import tweetArr from './Array'
import wall from './wallTweetCamp.jpg';
import logo from './logoEthio.jpg';


/* const tweetArr = [
    "the first tweet",
    "the second tweet",
    "the third tweet",
    "the forth tweet"
]; */

const App = () => {
    return(
        <div className="ui container">

           <div>
            <img  className="ui fluid image" title="ethio-logo" src={wall} alt="ethio-logo"/>
           
           </div>
            
            <p></p>
            <div className="ui menu">
            <img  className="ui small circular image" title="ethio-logo" src={logo} alt="ethio-logo"/>
                <div className="header item">
                    Our fight for justice
                </div>
                <a className="item active">
                    Tweeter Campaign
                </a>
                <a className="item">
                    Jobs
                </a>
                <a className="item">
                    Locations
                </a>
            </div>
            <div>
                <Tweet arr={tweetArr}/>
            </div>
        </div>
        
        
    )
}

export default App;