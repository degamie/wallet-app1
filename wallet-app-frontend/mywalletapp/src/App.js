import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Balance from './component/functions/Balance';
import AddFunds from './services/AddFunds';
import TransferFunds from './services/TransferFunds'
import Hero from './component/pages/Hero';
import Layout from './component/Layout';

function App() {
    return (
        <Router>
             <div>
                <Layout>
                <Routes>
                     <Route path="/" element={<Hero />} />
                     <Route path="/auth/login" element={<Login />} />
                     <Route path="/auth/register" element={<Register />} />
                     <Route path="/balance" element={<Balance />} />
                     <Route path="/add-funds" element={<AddFunds />} />
                     <Route path="/transfer-funds" element={<TransferFunds />} />
                 </Routes>
                </Layout>
             </div>
         </Router>
    );
}

export default App;
