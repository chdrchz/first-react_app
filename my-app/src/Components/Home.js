import React from "react";
import Search from "./Search";
import '../Styles/Home.css';
import Button from "./Button";

function Home() {
    return (
        <div className="container">
            <div className="hero">
                <h1>Do more of what you love with <span>friends</span></h1>
                <Search children="enter zip code"/>
                <Button color="#FF773E">find a class</Button>
            </div>
            <div className="classesContainer">
                <h3>or... find something new</h3>
                <div className="classes">
                    <div className="classCard">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;