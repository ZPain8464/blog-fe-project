import React from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";

const Articles = ({props}) => {
    const articles = props;
    const params = useParams();
    const filterArticles = articles.filter(a => {
        return a.attributes.category.data.attributes.category_name === params.id
        });
    return (
        <>  
            {params.id ? filterArticles.map((a,i) => (
                <Link key={i} to={`/article/${a.id}`}>
                <div className="article">
                    <h2>{a.attributes.title}</h2>
                    <div className="article_card">
                        <img src={`http://localhost:1337${a.attributes.image.data.attributes.formats.small.url}`} />
                    </div>
                </div>
                </Link>
            ))
            :
            articles.map((a, i) => (
                <Link key={i} to={`/article/${a.id}`}>
                    <div className="article">
                        <h2>{a.attributes.title}</h2>
                        <div className="article_card">
                            <img src={`http://localhost:1337${a.attributes.image.data.attributes.formats.small.url}`} />
                        </div>
                    </div>
                </Link>
            ))
            }
        </>
    )
}

export default Articles;