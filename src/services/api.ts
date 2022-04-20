import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://test-blog-roan.vercel.app/api',
});
