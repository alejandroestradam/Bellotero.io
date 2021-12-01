import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css"

const Navbar = () => {
      
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://cdn.zeplin.io/5a0a3ea82890fd775b3f74ee/assets/0C5F5A17-EF8D-4BE8-AEC5-C55E58FAC142.svg" alt="logo"/>
            </div>
            <div className="links">
                    <NavLink exact to="/" className="link">
                        Home
                    </NavLink>
                    <NavLink exact to="/solutions" className="link">
                        Solutions
                    </NavLink>
                    <NavLink exact to="/stories" className="link">
                        Stories
                    </NavLink>
                    <NavLink exact to="/partners" className="link">
                        Partners
                    </NavLink>
                    <NavLink exact to="/about" className="link">
                        About
                    </NavLink>
                    <NavLink exact to="/blog" className="link">
                        Blog
                    </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
