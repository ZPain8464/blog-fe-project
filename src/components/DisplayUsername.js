import React from "react";
import Cookies from "universal-cookie";

const DisplayUsername = () => {
    const cookies = new Cookies();
    const username = cookies.get("username");

    return (
        <div className="display_username_container">
            <div className={username ? "active" : "hidden"}>
                <p>Hello, {username}!</p>
            </div>
        </div>
    );
};

export default DisplayUsername;