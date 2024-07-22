import React from "react";
import '../Styles/SideNav.css';

function SideNav() {
    return (
        <div className="sideNav">
            <div className="ul-1">
                <ul>
                    <li id="home"><a>Home</a></li>
                    <li><a>New & Trending</a></li>
                </ul>
            </div>
            <div className="ul-2">
                <ul>
                    <li><a>Hobby Rooms</a></li>
                    <li><a>Hobby Buddies</a></li>
                    <li><a>Classes</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;