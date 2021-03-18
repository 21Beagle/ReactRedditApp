import React from 'react';
import './RedditFeed.css'
import Post from '../Post/Post'

class RedditFeed extends React.Component {

    render () {
        return (
            <div className="redditFeed">
                <h2>Feed</h2>
                {
                    this.props.posts.map(post => {
                        return <Post post={post}
                        key={post.id} />
                    })
                }
            </div>
        )
    }
}

export default RedditFeed;