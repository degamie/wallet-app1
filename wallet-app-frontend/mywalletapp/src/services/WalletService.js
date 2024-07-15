// src/services/WalletService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/wallets';

export const getWallets = () => axios.get(API_URL);
export const getWallet = (id) => axios.get(`${API_URL}/${id}`);
export const createWallet = (wallet) => axios.post(API_URL, wallet);
export const updateWallet = (id, wallet) => axios.put(`${API_URL}/${id}`, wallet);
export const deleteWallet = (id) => axios.delete(`${API_URL}/${id}`);
