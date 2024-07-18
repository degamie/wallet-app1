import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/pages/Login';
import Register from './component/pages/Register';
import Balance from './component/functions/Balance';
import AddFunds from './services/AddFunds';
import TransferFunds from './services/TransferFunds'
import Hero from './component/pages/Hero';
import Footer from './component/pages/Footer';
import Header from './component/pages/Header';
import Dashboard from './component/Dashboard';

function App() {
    return (
        <>
        <Header/>
        <Router>
             <div>
                
                <Routes>
                     <Route path="/" element={<Hero />} />
                     <Route path="/auth/login" element={<Login />} />
                     <Route path="/auth/register" element={<Register />} />
                     <Route path="/balance" element={<Balance />} />
                     <Route path="/add-funds" element={<AddFunds />} />
                      <Route path="/transfer-funds" element={<TransferFunds />} />
                      <Route path="/mydash" element={<Dashboard />} />

                 </Routes>
                
             </div>
         </Router>
         <Footer/>
         </>
    );
}

export default App;
