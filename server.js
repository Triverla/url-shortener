const express = require('express');
const config = require('./config/config')

const app = express();

// Connect to database


app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = config.port;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));