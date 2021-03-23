import React from 'react';
import './RedditFeed.css'
import Post from '../Post/Post'

const RedditFeed = (props) => {
    
        return (
            <div className="redditFeed">
                <h2>Feed - www.reddit.com{props.title}</h2>
                 {
                     (props.articles != null) ? props.articles.map((article, index) => { 
                     return <Post key={index} article={article.data} />}) : ''
                 } 
            </div>
        )
    }
export default RedditFeed;