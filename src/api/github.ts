import axios from 'axios';
const githubBaseUrl = 'https://api.github.com';

const github = axios.create({ baseURL: githubBaseUrl });

export default github;
// GET LIST OF REPOS
// /users/limon4ikas/repos
// GET REPO
// /repos/limon4ikas/nexter'
