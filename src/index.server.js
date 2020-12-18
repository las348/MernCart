const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
// const bodyParser = require('body-parser');
env.config();

const PORT = process.env.PORT || 2000;


//mongodb+srv://root:<password>@cluster0.sqjl5.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.sqjl5.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});