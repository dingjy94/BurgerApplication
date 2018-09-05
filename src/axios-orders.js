import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://reactburger-d37b5.firebaseio.com/'
});

export default instance;