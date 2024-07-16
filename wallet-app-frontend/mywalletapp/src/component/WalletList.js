import React, { useEffect, useState } from 'react';
import { getWallets } from '../services/WalletService';

const WalletList = () => {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        getWallets().then(response => {
            setWallets(response.data);
        }).catch(error => {
            console.error('Error fetching wallets:', error);
            // Handle error fetching data, e.g., setWallets([]) or other error handling
        });
    }, []);

    if (!Array.isArray(wallets) || wallets.length === 0) {
        return (
            <div>
                <h1>Wallets</h1>
                <p>No wallets found.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Wallets</h1>
            <ul>
                {wallets.map(wallet => (
                    <li key={wallet.id}>
                        {wallet.owner}: ${wallet.balance}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WalletList;
