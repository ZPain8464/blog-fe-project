import React from "react";
import Articles from "../components/Articles";


const ArticlesContainer = ({props}) => {
    return (
        <>
        <section>
            <h1>Catch the Latest:</h1>
        </section>
        <div className="articles_container">
            <Articles props={props}/>
        </div>
        </>
    )
}

export default ArticlesContainer;