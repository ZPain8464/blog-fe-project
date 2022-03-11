import { useState } from "react";
import Cookies from "universal-cookie";

export const CreateComment = (comments) => {
    console.log(comments)
    
    const [commentText, setCommentText] = useState("");

    const cookies = new Cookies();
    const username = cookies.get("username");
    const token = cookies.get("token")

    const postComment = async () => {
        const request = await fetch(`http://localhost:1337/api/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                {data: {
                    comment_text: commentText,
                    // article: article
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