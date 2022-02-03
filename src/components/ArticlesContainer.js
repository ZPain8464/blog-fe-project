import React from "react";
import Articles from "../components/Articles"

const ArticlesContainer = () => {
    return (
        <>
        <section>
            <h1>Catch the Latest:</h1>
        </section>
        <div className="articles_container">
            <Articles />
        </div>
        </>
    )
}

export default ArticlesContainer;