import React from 'react';
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer';
import Comments from '../../componentes/Comments/Comments'; // Importe o novo componente
import './Faith.css';
import { CSSTransition } from 'react-transition-group';
import fadeIn from '../../animations/fadeIn';

function Faith() {
    const videoURL = "https://www.youtube.com/embed/F3yNYKBf_Gc?si=HrzQxdpq2knQpeLj";

    return (
        <CSSTransition in={true} timeout={500} classNames="page" appear>
            <div className="faith-page" css={fadeIn}>
                <h2>Vídeo para Aumentar sua Fé</h2>
                <VideoPlayer url={videoURL} />
                <Comments /> {/* Adicione o componente Comments aqui */}
            </div>
        </CSSTransition>
    );
}

export default Faith;


