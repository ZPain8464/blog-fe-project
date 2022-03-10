import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from 'universal-cookie';
import qs from "qs";



const Article = ({props}) => {

    const [comments, setComments] = useState([]);


    useEffect(() => {
        const fetchComments = async () => {
            const query = qs.stringify({
                populate: ['article'], 
              }, {
                encodeValuesOnly: true,
              });
            const response = await fetch(`http://localhost:1337/api/comments?${query}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            const commentsArr = data.data;
            setComments(commentsArr);
          };
        
          fetchComments();
      }, []);

    const articles = props;
    const params = useParams();
    const filterArticle = articles.filter(a => {
        return a.id.toString() === params.id
        });
    const blogPost = filterArticle;
    const filterBlogComments = comments.filter(c => {
        return c.attributes.article.data.id.toString() === params.id
    });
    const commentCount = filterBlogComments;
    
    return (
        <>
        {params.id && blogPost.map((b, i) => (
            <div key={i} className="post">
            <h1>{b.attributes.title}</h1>
                <div>
                    <p>{b.attributes.author}</p>
                    <span>{b.attributes.createdAt}</span>
                </div>
                <div className="post_image_container">
                    <img alt="" className="post_image" src={`http://localhost:1337${b.attributes.image.data.attributes.url}`} />
                </div>
                <div className="post_content_container">
                    <p>{b.attributes.content}</p>
                </div>
                <hr/>
                <div className="comments_container">
                    {commentCount.length > 0
                    ? 
                    (
                        <h3>Comments ({commentCount.length})</h3>
                    )
                    : ""
                    }
                </div>
            </div>
        )) 
        }   
        </>
    )
}

export default Article;