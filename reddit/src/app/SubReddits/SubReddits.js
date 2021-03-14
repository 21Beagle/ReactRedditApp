import React from 'react';

class SubReddits extends React.Component {
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
                <button className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</button>
            </div>
        )
    }
}



export default SubReddits;