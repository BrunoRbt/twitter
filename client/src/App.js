import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'; // Importe o componente de Login
import Register from './components/Register/Register'; // Importe o componente de Register

function App() {
    return (
        <Router>
            <Routes>
                {/* Rota para a página de login */}
                <Route path="/" element={<Login />} />
                
                {/* Rota para a página de registro */}
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
