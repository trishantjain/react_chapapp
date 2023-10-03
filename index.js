const express = require('express');
const dotenv = require('dotenv');
const { chats } = require('./data/data');
const connectDB = require('./config/db');

const app = express();
dotenv.config();

connectDB();

app.get("/api/chat", (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

app.use("/api/user", require('./routes/userRoutes'))

const PORT = process.env.PORT

app.listen(PORT, console.log(`listning at port ${PORT}`));