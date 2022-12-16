const express = require('./node_modules/express'); 
const bodyParser =  require('body-parser'); 
const Product = require('./models/product'); 
const mongoose = require('mongoose');

const app = express();

// hkOukSZQhkcSWIkH
mongoose.connect("mongodb+srv://auction:hkOukSZQhkcSWIkH@cluster0.b6uudya.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log('Connected to database')
}).catch(() => {
    console.log('Connection failed')
});
app.use(bodyParser.json()); 

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});

app.post('/test',(req,res,next) => {
    const prod = new Product({
        name: req.body.name,
        description: req.body.description,
        detailedDesc: req.body.detailedDesc,
        category: req.body.category,
        price: req.body.price,
        endDate: req.body.endDate,
        bidHistory: req.body.bidHistory
    });
    prod.save().then(result => {
        res.status(201).json({
            message: 'product added',
            prodId: result._id
        });
    });
});

app.get('/test',(req,res,next)=> {    
    Product.find().then(docs => {
        res.status(200).json({
            message: 'success',
            menu: docs
        }); 
    });    
})

app.delete("/test/delete/:id",(req,res,next) => {
    Product.deleteOne({id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({message: 'deletion success'});
    });  
})

app.get("test/search/:id", (req,res,next) => {
    Product.findOne({id:req.params.id}).then(result => {
        res.status(200).json({
            message: 'searched success',
            prod: result 
        })
    });
})

module.exports = app; 
