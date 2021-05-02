import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className="media-container">
            <img className="media" src={props.media.url} alt="" className="post-image" width="100%" />
        </div>
    )
}



export default Card;