import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/navbar.css";
import axios from 'axios';

const Navbar = () => {
    const [post,setPost]=React.useState([]);

    React.useEffect(() => {
         axios.get("./app.json")
         .then(res=>{
             setPost(res.data.menu);
         }).catch(err =>{
             console.log(err);
         })
     }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://cdn.zeplin.io/5a0a3ea82890fd775b3f74ee/assets/0C5F5A17-EF8D-4BE8-AEC5-C55E58FAC142.svg" alt="logo"/>
            </div>
            <div className="links">
            {post.map((obj,index) => {
                return (
                    <NavLink exact to={post[index].route} className="link">{post[index].text}</NavLink>
                )
            })}
            </div>
        </nav>
    )
}

export default Navbar;

