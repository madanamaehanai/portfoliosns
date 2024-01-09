// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  // baseURL: process.env.REACT_APP_URL.replace("http://localhost:3000", ""),
});

export default instance;
