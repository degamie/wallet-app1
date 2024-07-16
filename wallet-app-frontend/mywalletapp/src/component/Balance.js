import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Balance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get('/api/balance');
                setBalance(response.data);
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };
        fetchBalance();
    }, []);

    return (
        <div>
            <h2>Your Balance</h2>
            <p>{balance}</p>
        </div>
    );
};

export default Balance;
