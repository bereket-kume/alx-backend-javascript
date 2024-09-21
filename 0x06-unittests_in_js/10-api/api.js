const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the payment system");
})

app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
    const paymentMethods = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.json(paymentMethods);
});

app.post('/login', (req, res) => {
    const { userName } = req.body
    res.send(`Welcome ${userName}`)
})

const PORT = 7865;
app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
