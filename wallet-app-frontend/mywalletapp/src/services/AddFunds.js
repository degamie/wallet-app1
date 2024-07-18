import React, { useState } from 'react';
import axios from 'axios';

const AddFunds = () => {
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/funds/add', amount, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response.data);
            // Handle success (e.g., display message, update balance)
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    };

    return (
        <div>
            <h2>Add Funds</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Add Funds</button>
            </form>
        </div>
    );
};

export default AddFunds;
