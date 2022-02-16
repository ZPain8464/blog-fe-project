import React from "react";
import Cookies from "universal-cookie";

const SidebarContainer = () => {
    const cookies = new Cookies();
    const username = cookies.get("username");

    return (
    <div className="sidebar_container">
        <div className="display_username_container">
            <div className={username ? "active" : "hidden"}>
                <p>Hello, {username}!</p>
            </div>
        </div>
    </div>
    )
}

export default SidebarContainer;