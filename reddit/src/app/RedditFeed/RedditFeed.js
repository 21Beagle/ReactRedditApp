import React from 'react';

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
                
            </div>
        )
    }
}


export default RedditFeed;