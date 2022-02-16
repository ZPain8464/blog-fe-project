import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const SidebarButtons = () => {

    const cookies = new Cookies();
    const logout = () => {
        cookies.remove('token');
        cookies.remove('email');
        cookies.remove('username');
        window.location.reload();
    };

    return(
        <div>
            <button className="write_article_button">
                <Link to="/create">
                Write
                </Link>
            </button>
            <button className="your_articles_button">
                <Link to="/your-articles">
                Your Articles
                </Link>
            </button>
            <button className="feeds_button">
                <Link to="/">
                Community Feed
                </Link>
            </button>
            <button 
                className="logout_button"
                onClick={logout}>
                Logout
            </button>
        </div>
    )
}

export default SidebarButtons;