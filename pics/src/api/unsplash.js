import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 61d77b773ab1ee4df8113774c965eef2286fd4987145f4b6182a27da3d798474',
  },
});
