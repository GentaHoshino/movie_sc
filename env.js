// env.js
// require('dotenv').config();

import dotenv from 'dotenv'
dotenv.config(); // .envをprocess.envに割当て

const key = process.env.NODE_KEY;
const num = process.env.NODE_NUM;

console.log(key);
console.log(num);