import React, { useState, useEffect} from "react";
import './App.css';
import Header from './app/Header/Header.js';
import RedditFeed from './app/RedditFeed/RedditFeed.js';
import SubReddits from './app/SubReddits/SubReddits';

function App() {


  const [subs, setSubs] = useState([]);
  const [articles, setArticles] = useState([]);
  const [subReddit, setSubReddit] = useState("r/popular");

  useEffect(() =>
    fetch(`https://www.reddit.com/${subReddit}.json`).then(res => {
      if (res.status !== 200) {
        console.log("ERROR");
        return;
      }

      res.json().then(data => {
        if (data !== null) {
          setArticles(data.data.children);
        }
      })
    })
    , [subReddit])


  useEffect(() =>
    fetch("https://www.reddit.com/subreddits.json").then(res => {
      if (res.status !== 200) {
        console.log("ERROR");
        return;
      }
      res.json().then(data => {
        if (data !== null) {
          setSubs(data.data.children);
        };
      });
    }), []);

    function handleChange(newValue) {
      setSubReddit(newValue);
    }

  return (
    <div className="App">
      <Header />
      <div className="Main">
        <RedditFeed articles={articles} title={subReddit} />
        <SubReddits subs={subs} onChange={handleChange} ></SubReddits>
      </div>
    </div>
  );
}
export default App;
