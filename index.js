const express = require('express');
const ejs = require('ejs'); 

const app = express();
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');
app.use(express.json());

const products = [
    {
        name: 'Laptop',
        price: 400.00,
        quantity: 4,
        active: true
    },
    {
        name: 'Keyboard',
        price: 290.00,
        quantity: 3,
        active: true
    },
    {
        name: 'Phone',
        price: 400.00,
        quantity: 4,
        active: true
    },
    {
        name: 'Mouse',
        price: 100.00,
        quantity: 2,
        active: true
    }
]

app.get('/', (req,res)=>{
    res.render('info')
})

app.get('/products', (req, res) => {
    res.render('index', { products: products });
});

app.post('/products', (req,res)=>{
    const { name, price, quantity, active } = req.body
    if (!name){
        return res.status(422).json({ message: "Name is required"})
    }
    products.push({
        name,
        price,
        quantity,
        active
    })
    res.status(201).json({ message: 'Product created successfully'})
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000')
})