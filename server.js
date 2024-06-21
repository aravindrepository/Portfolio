const express = require("express");
const app = express();
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5001;

app.use(express.static('MAIN'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/MAIN/index.html');
});

app.post('/', (req, res) => {
    console.log('Received request:', req.body); // Log the request body for debugging

    const { email, name, message } = req.body;
    if (!email || !name || !message) {
        console.log('Missing fields:', { email, name, message }); // Log missing fields
        return res.status(400).send('All fields are required');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'contact.from.port@gmail.com',
            pass: 'ycypivjlaroohfsc'
        }
    });

    const mailOptions = {
        from: email,
        to: 'aravinda2702@gmail.com',
        subject: 'RESPONSE Message from Website',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
            return res.status(500).send('Error');
        }
        console.log('Email sent successfully:', info.response);
        res.send('success');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
