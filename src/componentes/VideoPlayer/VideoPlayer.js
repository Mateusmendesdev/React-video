import React, { useState } from 'react';
import './VideoPlayer.css';

function VideoPlayer({ url }) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div className="video-player">
            <iframe title="video-player" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
            <div className="like-dislike-buttons">
                <button onClick={handleLike}>Like ({likes})</button>
                <button onClick={handleDislike}>Dislike ({dislikes})</button>
            </div>
        </div>
    );
}

export default VideoPlayer;




