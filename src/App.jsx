import React, { useState } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';

const App = () => {
    // Estado para almacenar la lista de tweets
    const [tweets, setTweets] = useState([]);

    // Función para agregar un nuevo tweet a la lista
    const addTweet = (newTweet) => {
        setTweets([...tweets, { id: Date.now(), content: newTweet, type: 'annotation' }]);
    };

    return (
        <div className="app-container">
            <TweetInput addTweet={addTweet} />
            <TweetList tweets={tweets} />
        </div>
    );
};

export default App;

