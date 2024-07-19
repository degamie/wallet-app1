import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/Context';
import axios from 'axios';

const Dashboard = () => {
    const { username, firstName } = useContext(UserContext);
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
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white w-64 flex-shrink-0 p-4 justify-center">
            <a href="/" className="flex items-center py-4 px-2">

            <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="Logo" className="h-8 w-8 mr-2" />

            <span className="font-bold text-white text-xl">SimplePay</span>

</a>
                <nav className="space-y-4 pt-6">
                    <a href="#balance" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Show Balance</a>
                    <a href="#add-funds" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Add Funds</a>
                    <a href="#transfer-money" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Transfer Money</a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">Hi {firstName}</h1>
                    <p className="text-gray-700">Welcome to your Wallet {username}</p>
                </div>

                {message && <p className="text-center text-red-500 mb-4">{message}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Show Balance Card */}
                    <div id="balance" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Show Balance</h3>
                        <p className="text-gray-700">Balance: ${balance.toFixed(2)}</p>
                    </div>

                    {/* Add Funds Card */}
                    <div id="add-funds" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Add Funds</h3>
                        <form onSubmit={addFunds}>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="Amount" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
                                Add Funds
                            </button>
                        </form>
                    </div>

                    {/* Transfer Money Card */}
                    <div id="transfer-money" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Transfer Money</h3>
                        <form onSubmit={transferMoney}>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="Amount" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <input 
                                type="text" 
                                value={transferTo} 
                                onChange={(e) => setTransferTo(e.target.value)} 
                                placeholder="Recipient Username" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
                                Transfer Money
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
