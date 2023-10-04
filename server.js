const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use('/css', express.static('frontend/public/css'));
app.use('/js', express.static('frontend/public/js'));
app.use('/assets/images', express.static('frontend/public/assets/images'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/public/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/frontend/public/contact.html');
});

app.get('/doctors', (req, res) => {
    res.sendFile(__dirname + '/frontend/public/doctors.html');
});

app.get('/treatments', (req, res) => {
    res.sendFile(__dirname + '/frontend/public/features.html');
});

// Add more routes as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});