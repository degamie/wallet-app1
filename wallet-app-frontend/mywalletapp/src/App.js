import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Hero from './component/Hero';
function App() {
    return (
        <Router>
            <div>
                <Routes>
                  <Route path="/" element={<Hero />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
