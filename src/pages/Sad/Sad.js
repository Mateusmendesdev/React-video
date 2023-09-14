import React from 'react';
import VideoPlayer from '../../componentes/VideoPlayer/VideoPlayer'; // Importação do VideoPlayer está presente
import './Sad.css'; // Importação do CSS está presente
import { CSSTransition } from 'react-transition-group';
import fadeIn from '../../animations/fadeIn';
import Comments from '../../componentes/Comments/Comments';


function Sad() {
    const videoURL = "https://www.youtube.com/embed/utMiQLUpTbM?si=7IKBz1bAbyGTSxez";

    return (
        <CSSTransition in={true} timeout={500} classNames="page" appear>
            <div className="sad-page" css={fadeIn}>
                <h2>Vídeo para Momentos Tristes</h2>
                <VideoPlayer url={videoURL} />
                <Comments /> {/* Adicione o componente Comments aqui */}
            </div>
        </CSSTransition>
    );
}


export default Sad;
