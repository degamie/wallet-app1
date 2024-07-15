// src/components/WalletDetails.js
import React, { useEffect, useState } from 'react';
import { getUserWallet } from '../services/WalletService';

const WalletDetails = () => {
    const [wallet, setWallet] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const walletData = await getUserWallet();
                setWallet(walletData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchWallet();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!wallet) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Wallet Details</h1>
            <p>Owner: {wallet.owner}</p>
            <p>Balance: ${wallet.balance}</p>
        </div>
    );
};

export default WalletDetails;
