const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
// const nodemailer = require('nodemailer');

// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "cfcce67ea424bb",
//         pass: "1e92e1e2b3c06a"
//     }
// });
// const send = async options => {
//     const message = {
//         from: "Nodemailer <example@nodemailer.com>",
//         to: "virajprabhup@gmail.com",
//         subject: "Thankyou for contacting us",
//         text: "We will get back to you soon"
//     };

//     const info = await transporter.sendMail(message);
//     console.log(info.messageId);
//     return info;
// }

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

// app.post('/api/send-email', async (req, res) => {
//     try {
//         const response = await send(req);
//         console.log(response);
//         res.status(200).json({
//             message: 'sucess',
//             data: response
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             message: error.message
//         })
//     }
// })


/*
Use in your req.body
 const options = {
   userEmail: <mailtrapEmail>,
   subject: 'Welcome to Auffr',
   message: 'We are excited to have you in the family'
 }
*/



// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});