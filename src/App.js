import React, { useState } from 'react';
import './styles/GlobalStyles.css';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Motivational from './pages/Motivational/Motivational';
import Faith from './pages/Faith/Faith';
import Sad from './pages/Sad/Sad';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        const theme = darkMode ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
    };

    return (
        <Router>
            <NavBar toggleDarkMode={toggleDarkMode} />
            <Routes>
                <Route path="/motivational" element={<Motivational />} />
                <Route path="/faith" element={<Faith />} />
                <Route path="/sad" element={<Sad />} />
                {/* Aqui você pode adicionar rotas adicionais conforme necessário */}
            </Routes>
        </Router>
    );
}

export default App;


