import React from 'react';
import './RedditFeed.css'

class RedditFeed extends React.Component {
    constructor(props) {
        super(props);
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    render () {
        return (
            <div className="RedditFeed">
                <p>Reddit Feed</p>
            </div>
        )
    }
}


export default RedditFeed;