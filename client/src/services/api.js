import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Troque pela URL do seu backend
});

export const loginUser = async (credentials) => {
  return await api.post('/login', credentials);
};

export const registerUser = async (data) => {
  return await api.post('/signup', data);
};

export default api;
