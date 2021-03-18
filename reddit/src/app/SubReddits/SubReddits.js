import React from 'react';
import './SubReddits.css'
import SubReddit from '../SubReddit/SubReddit'

class SubReddits extends React.Component {
    
    render () {
        return (
                <div className="subRedditList">
                    <h2>Subreddits</h2>
                    {
                    this.props.subs.map(subs => {
                        return <SubReddit subs={subs}
                        key={subs.id} />
                    })
                }
                </div>
        )
    }
}



export default SubReddits;