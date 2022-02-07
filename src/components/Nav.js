import React from "react";
import { Link } from "react-router-dom";

const Nav = ({props}) => {
    const categories = props;

    return (
        <div className="navbar_container">
            <div className="logo_container">
                <Link to="/">
                    <h2>Stay Techy</h2>
                </Link>
            </div>
            <div className="categories_container">
                <ul className="categories_ul">
                    {categories.map((c, i) => (
                        <Link key={i} to={`/category/${c.attributes.category_name}`}>
                            <li key={i}>{c.attributes.category_name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Nav;