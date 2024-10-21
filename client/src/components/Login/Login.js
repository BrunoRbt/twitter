import React from 'react';
import './Login.css'; // Importar o arquivo de estilo do Login

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
                <p>
                    Não tem uma conta? <a href="/register">Registre-se aqui.</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
