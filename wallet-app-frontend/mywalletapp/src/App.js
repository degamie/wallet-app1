import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Balance from './component/Balance';
import AddFunds from './component/AddFunds';
import TransferFunds from './component/TransferFunds';
import Hero from './component/Hero';

function App() {
    return (
        <Router>
             <div>
                 <Routes>
                     <Route path="/" element={<Hero />} />
                     <Route path="/auth/login" element={<Login />} />
                     <Route path="/auth/register" element={<Register />} />
                     <Route path="/balance" element={<Balance />} />
                     <Route path="/add-funds" element={<AddFunds />} />
                     <Route path="/transfer-funds" element={<TransferFunds />} />
                 </Routes>
             </div>
         </Router>
    );
}

export default App;
