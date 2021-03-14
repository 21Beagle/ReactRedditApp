import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js'

import styles from './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="Header">
                <input 
                placeholder="Search These Posts" 
                onChange={this.handleTermChange}
                />
                <button className="SearchButton" onClick={this.props.onSave} >Search</button>
            </div>
        )
    }
}



export default Header;