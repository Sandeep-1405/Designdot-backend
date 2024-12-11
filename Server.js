const express = require('express');
const cors = require('cors');
const connectToDb = require('./db');
const router = require('./routes/routes');
const dotenv = require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

connectToDb();
app.use(router)

const port = process.env.port;

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
});