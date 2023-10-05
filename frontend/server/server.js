const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;


app.use('/css', express.static('../public/css'));
app.use('/js', express.static('../public/js'));
app.use('/assets/images', express.static('../public/assets/images'));

app.use(express.static(path.join(__dirname, '..', 'public')));

// Define routes for each HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/treatments', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'features.html'));
});

app.get('/doctors', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'doctors.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'contact.html'));
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});