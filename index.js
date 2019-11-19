// index.js (root)

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, () => {
    console.log('DB connected');
});

const app = express();

// Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/', (req, res) => res.send('Howdy'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
