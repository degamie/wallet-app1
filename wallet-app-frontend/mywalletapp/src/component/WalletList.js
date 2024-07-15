// src/components/WalletList.js
import React, { useEffect, useState } from 'react';
import { getWallets } from '../services/WalletService';

const WalletList = () => {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        getWallets().then(response => {
            setWallets(response.data);
        });
    }, []);

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
