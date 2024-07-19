import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './pages/Header'; 
import Footer from './pages/Footer'; 
import Hero from './pages/Hero'; 
import Login from './pages/Login'; 
import Register from './pages/Register';
import Balance from './functions/Balance'
import AddFunds from '../services/AddFunds';
import TransferFunds from '../services/TransferFunds';
import Dashboard from './pages/Dashboard';

function AppComponent() {
    let location = useLocation();

    return (
        <>
            {location.pathname !== "/dashboard" && <Header />}
            <div>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/balance" element={<Balance />} />
                    <Route path="/add-funds" element={<AddFunds />} />
                    <Route path="/transfer-funds" element={<TransferFunds />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default AppComponent;