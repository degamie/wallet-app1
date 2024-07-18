import React, { useState, useEffect } from 'react';
import axios from './axiosConfig';

const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');
    const [transferTo, setTransferTo] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        try {
            const response = await axios.get('/api/wallet/balance', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setBalance(response.data.balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    const addFunds = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/wallet/add-funds', { amount }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Funds added successfully!');
            setBalance(balance + parseFloat(amount));
            setAmount('');
        } catch (error) {
            setMessage('Failed to add funds.');
        }
    };

    const transferMoney = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/wallet/transfer', { amount, transferTo }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Transfer successful!');
            setBalance(balance - parseFloat(amount));
            setAmount('');
            setTransferTo('');
        } catch (error) {
            setMessage('Failed to transfer money.');
        }
    };

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Balance: ${balance.toFixed(2)}</p>
            {message && <p>{message}</p>}

            <form onSubmit={addFunds}>
                <h3>Add Funds</h3>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Amount" 
                    required 
                />
                <button type="submit">Add Funds</button>
            </form>

            <form onSubmit={transferMoney}>
                <h3>Transfer Money</h3>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Amount" 
                    required 
                />
                <input 
                    type="text" 
                    value={transferTo} 
                    onChange={(e) => setTransferTo(e.target.value)} 
                    placeholder="Recipient Username" 
                    required 
                />
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
};

export default Dashboard;
