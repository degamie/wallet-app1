import axios from 'axios';

const API_URL = 'http://localhost:8080/api/wallets';

export const getWallets = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getWallet = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createWallet = async (wallet) => {
    const response = await axios.post(API_URL, wallet);
    return response.data;
};

export const updateWallet = async (id, wallet) => {
    const response = await axios.put(`${API_URL}/${id}`, wallet);
    return response.data;
};

export const deleteWallet = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const getUserWallet = async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
};


