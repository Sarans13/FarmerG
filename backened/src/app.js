const express = require("express");
const { Collection } = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const farmerdatabasecreate = require("./database/farmer-mongo");
const buyerdatabasecreate = require("./database/buyer-mongo");
let port =  process.env.PORT || 5500;
app.use(express.json());
const templatePath = path.join(__dirname,'../views');
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
// app.use(express.static('/public'));

app.get('/',(req,res)=>{
    res.render("background");
});

app.get('/farmer-login',(req,res)=>{
    res.render("farmer-login");
});

app.get('/farmer-signup',(req,res)=>{
    res.render("farmer-signup");
});

app.post('/farmer-signup',async(req,res)=>{
    const data = {
        name:req.body.name,
        password:req.body.password,
        aadhaar:req.body.aadhaarnumber,
        dob:req.body.dob,
        state:req.body.state,
        district:req.body.district
    }
    await farmerdatabasecreate.insertMany[data];
    console.log(req.body.name);
    res.render("farmer-login");
})

app.post("/farmer-login",async(req,res)=>{
    res.render("personal_info");
});

app.get('/personal_info',(req,res)=>{
    res.render("personal_info");
});

app.get('/rest-login',(req,res)=>{
    res.render("rest-login");
});

app.get('/rest-signup',(req,res)=>{
    res.render("rest-signup");
});

app.post('/rest-login',async(req,res)=>{
    const data = {
        name:req.body.name,
        password:req.body.password,
        aadhaar:req.body.aadhaarnumber,
        dob:req.body.dob,
        state:req.body.state,
        district:req.body.district
    }
    await buyerdatabasecreate.insertMany[data];
    res.render("search_page");
});

app.get('/search_page',(req,res)=>{
    res.render("search_page");
});

app.get('/order_page',(req,res)=>{
    res.render("order_page");
});

app.get('/yourcart1',(req,res)=>{
    res.render("yourcart1");
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})

