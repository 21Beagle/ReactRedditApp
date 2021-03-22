import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './app/Header/Header.js';
import RedditFeed from './app/RedditFeed/RedditFeed.js';
import SubReddits from './app/SubReddits/SubReddits';

function App() {
    const [subs, setSubs] = useState([ 
      {name: 'SubReddit1',  id: 1},
      {name: 'SubReddit2',  id: 2},
      {name: 'SubReddit3',  id: 3}
    ])
    const [articles, setPosts]= useState([])

    useEffect(() => 
    fetch("http://www.reddit.com/r/popular.json").then(res => {
          if (res.status != 200) {
              console.log("ERROR");
              return;
          }
  
          res.json().then(data => {
              if (data != null) {
                  setPosts(data.data.children);
              }
          })
      })
    ,[subs])

  

  
  return (
    <div className="App">
      <Header />
      <div className="Main">
          <RedditFeed articles={articles} />
          <SubReddits subs={subs}/>
      </div>
    </div>
  );
}
export default App;
