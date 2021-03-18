import React from 'react';
import './App.css';
import Header from './app/Header/Header.js';
import RedditFeed from './app/RedditFeed/RedditFeed.js';
import SubReddits from './app/SubReddits/SubReddits';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [ 
              {title: 'title1', noComments: "4", upVotes: "1000", data: "Some string of text", id: 1},
              {title: 'title2', noComments: "2", upVotes: "1001", data: "Some string of text", id: 2},
              {title: 'title3', noComments: "5", upVotes: "1002", data: "Some string of text", id: 3}
            ],
    subs: [ 
              {name: 'SubReddit1',  id: 1},
              {name: 'SubReddit2',  id: 2},
              {name: 'SubReddit3',  id: 3}
            ]
    };
    };
render() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
          <RedditFeed posts={this.state.posts} />
          <SubReddits subs={this.state.subs}/>
      </div>
    </div>
  );
}
}
export default App;
