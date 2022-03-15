import React, { useState, useContext } from "react";
import Cookies from "universal-cookie";

import { ArticleContext } from "../Articles/Article";

export const CreateComment = (comments) => {
    
    const [commentText, setCommentText] = useState("");
    const articles = useContext(ArticleContext);
    const cookies = new Cookies();
    const username = cookies.get("username");
    const token = cookies.get("token");

    // Need to get the article id and user is to make API POST call

    const postComment = async () => {
        let articleId;
        let userId;
        if (comments.comments.length > 0) {
            comments.comments.map(c => {
                articleId = c.attributes.article.data.id;
                userId = c.attributes.users_permissions_user.data.id;
                return {articleId, userId}
            });
        }

        const request = await fetch(`http://localhost:1337/api/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                {
                    data: {
                        comment_text: commentText,
                        article: {
                            id: articleId
                        },
                        users_permissions_user: {
                            id: userId
                        }
                    }
                })
        });
        const response = await request.json();
        const data = response;
        console.log(data)
    }

    return (
        <>
            <div className="create_comment_card_details">
                <p>{username}</p>
                <span>date</span>
            </div>
            <div className="create_comment_textarea">
                <textarea 
                    value={commentText} 
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Start typing..."></textarea>
            </div>
            <div className="create_comment_post_button_container">
                <button 
                    className="create_comment_post_button"
                    onClick={postComment}
                    >
                    Post
                </button>
            </div>
        </>
    )
}