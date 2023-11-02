import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '2c0a28f15a0e4056a0cd0e5733f25a36'
  }
});