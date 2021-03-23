import React from 'react';
import './Header.css'

function Header() {
    return (
        <div className="Header">
            <h1>Reddit App</h1>
            <div className="SearchBar">
                <input
                    placeholder="Search These Posts"
                />
                <button className="SearchButton" >Search</button>
            </div>
        </div>
    )
}




export default Header;