import React from "react";

const Nav = () => {
    return (
        <div className="navbar_container">
            <div className="logo_container">
                <h2>Blog Logo</h2>
            </div>
            <div className="categories_container">
                <ul className="categories_ul">
                    <li className="category_li">Tech</li>
                    <li className="category_li">Crypto</li>
                    <li className="category_li">Web 3</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;