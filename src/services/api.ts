import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://test-blog-roan.vercel.app:3000/api',
});
