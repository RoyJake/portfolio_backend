const express = require('express');
const path = require('path');


const app = express();

app.use('/files', express.static(path.join(__dirname, 'public/files')))


const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`app is listening on port ${PORT}`) });