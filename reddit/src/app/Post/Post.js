import React from 'react';
import Card from '../Card/Card'


const Post = (props) => {
        return (
            <div className="post">
                <a href={"https://www.reddit.com"+props.article.permalink}><h3 className="title">{props.article.title}</h3></a>
                <div className="media">
                <Card media={props.article}/>
                <p>{}</p>
                </div>
                <div className="info">
                    <p className="comments">By {props.article.author}</p>
                    <p className="upvotes">{props.article.score} Upvotes</p>
                </div>
            </div>
        )
}


export default Post;