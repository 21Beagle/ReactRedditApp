import React from "react";
import './SubReddits.css'




const SubReddits = (props) => {

    function handleChange(event) {
        props.onChange(event);
      }

    return (
        <div className="subRedditList">
            <h2>Subreddits</h2>
            {
                props.subs.map(
                    (subs, index) => {
                        return <button type="submit" onClick={() => handleChange(subs.data.url)}   className="subReddit" key={index}>{subs.data.title}</button>
                    }
                )
            }
        </div>
    )
}



export default SubReddits;