import axios from 'axios';
const githubBaseUrl = 'https://api.github.com';

const github = axios.create({ baseURL: githubBaseUrl });

export default github;
