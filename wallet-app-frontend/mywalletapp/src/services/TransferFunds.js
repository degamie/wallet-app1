import React, { useState } from 'react';
import axios from 'axios';

const TransferFunds = () => {
    const [receiverUsername, setReceiverUsername] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transferRequest = {
            receiverUsername,
            amount: parseFloat(amount),
        };
        try {
            const response = await axios.post('/api/transfer', transferRequest, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            // Handle success (e.g., display message, update balance)
        } catch (error) {
            console.error('Error transferring funds:', error);
        }
    };

    return (
        <div>
            <h2>Transfer Funds</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Receiver Username</label>
                    <input
                        type="text"
                        value={receiverUsername}
                        onChange={(e) => setReceiverUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Transfer</button>
            </form>
        </div>
    );
};

export default TransferFunds;
