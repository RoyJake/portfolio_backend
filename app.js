const express = require('express');
const path = require('path');


const app = express();

app.use('/files', express.static(path.join(__dirname, 'public/files')))

// Route to trigger file download
app.get('/download/:filename', (req, res) => {
 const filename = req.params.filename;
 const filePath = path.join(__dirname, 'public/files', filename);
 res.download(filePath, (err) => {
   if (err) {
     res.status(500).json({ message: 'File download failed' });
   }
 });
});

app.get('/', (req, res) => {

})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => { console.log(`app is listening on port ${PORT}`) });