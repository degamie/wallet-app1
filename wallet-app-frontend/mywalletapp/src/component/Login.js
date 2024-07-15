// src/components/Login.js
import React, { useState } from 'react';
import { login } from '../services/AuthService';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            setError(null);
            onLogin();  // Call the onLogin function passed as a prop
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div style={{color: 'red'}}>Error: {error}</div>}
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
