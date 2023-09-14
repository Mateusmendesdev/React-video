import React from 'react';
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer';
import Comments from '../../componentes/Comments/Comments'; // Importe o novo componente
import './Motivational.css';
import { CSSTransition } from 'react-transition-group';
import fadeIn from '../../animations/fadeIn';

function Motivational() {
    const videoURL = "https://www.youtube.com/embed/2c0y5H0FG6I?si=DN06TWIk02M0p1QZ";

    return (
        <CSSTransition in={true} timeout={500} classNames="page" appear>
            <div className="motivational-page" css={fadeIn}>
                <h2>Vídeo Motivacional</h2>
                <VideoPlayer url={videoURL} />
                <Comments /> {/* Adicione o componente Comments aqui */}
            </div>
        </CSSTransition>
    );
}

export default Motivational;


