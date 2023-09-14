import React from 'react';
import { Link } from 'react-router-dom';  // Importando o componente Link do react-router-dom
import './NavBar.css';

function NavBar({ toggleDarkMode }) {
    return (
        <div className="navbar">
            <h1>Seletor de Vídeos</h1>
            <nav>
                <Link to="/motivational"> <button>Motivacional</button></Link>
                <Link to="/faith"><button>Fé</button></Link>
                <Link to="/sad"><button>Triste</button></Link>
            </nav>
            <button onClick={toggleDarkMode}>Dark Mode</button>
        </div>
    );
}

export default NavBar;
