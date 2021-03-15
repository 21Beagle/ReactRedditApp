import React from 'react';
import './App.css';
import Header from './app/Header/Header.js';
import RedditFeed from './app/RedditFeed/RedditFeed.js';
import SubRedditsList from './app/SubRedditsList/SubRedditsList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
          <RedditFeed />
          <SubRedditsList />
      </div>
    </div>
  );
}

export default App;
