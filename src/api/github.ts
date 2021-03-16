import axios from 'axios';
const GITHUB_BASE_URL = 'https://api.github.com';

const github = axios.create({ baseURL: GITHUB_BASE_URL });

export default github;
