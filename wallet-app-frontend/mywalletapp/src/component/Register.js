import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/register', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };
    return (
        <div>
            <div><h2>Register</h2></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};


export default Register;
