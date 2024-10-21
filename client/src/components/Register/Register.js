import React from 'react';
import './Register.css'; // Importar o arquivo de estilo do Register

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Registrar</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
                <p>
                    Já tem uma conta? <a href="/">Faça login aqui.</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
