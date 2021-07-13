const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT   ||  3000;
require("./db/conn");

const Register = require("./models/register");
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.get("/",(req, res) => {
    res.render("index");
});

app.post("/first",(req, res) => {
try{

    console.log(req.body.fname);
    res.send(req.body.email);
}catch(e){
    console.log(e);
}

});


app.get("/register",(req, res) =>{
    res.render("register");
});

//create new user in the DB

app.post("/register", async (req, res) =>{
    try{
        console.log(req.body.email);
        res.send(req.body.email);
}   
    catch{
        res.status(400).send(error);
    }

})



app.listen(port,() =>{

    console.log('The server is running at port number ${PORT}');
});


