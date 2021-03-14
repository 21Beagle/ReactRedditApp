import React from 'react';

class SubRedditsList extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    render () {
        return (
            <div className="Playlist">
                
            </div>
        )
    }
}




export default SubRedditsList;