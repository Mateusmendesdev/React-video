import React, { useState } from 'react';

function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleSubmitComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <h3>Comentários</h3>
            <div>
                <textarea rows="4" cols="50" value={newComment} onChange={handleCommentChange} placeholder="Adicione um comentário..." />
                <button onClick={handleSubmitComment}>Comentar</button>
            </div>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;
