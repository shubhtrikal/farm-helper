const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connection = require('./db')
const activity = require('./routes/activity')
const register = require('./routes/register')

const app = express()

dotenv.config();

connection()

app.use(express.json());
app.use(cors());

app.use('/', activity);
app.use('/', register);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

