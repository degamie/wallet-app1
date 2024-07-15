import axios from 'axios';

const API_URL = '/api/auth';

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, {
        username,
        password
    });

    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }

    return response.data;
};

export const register = async (username, password) => {
    const response = await axios.post(`${API_URL}/register`, {
        username,
        password
    });

    if (response.status !== 200) {
        throw new Error('Network response was not ok');
    }

    return response.data;
};
