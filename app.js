const express = require("express");
const path = require('path');
const database = require("./routes/db-config");
const cookieParser = require("cookie-parser");
const app = express();
const cookie = require("cookie-parser");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Router = require("./routes/pages");


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookie());
app.use(express.json());

database.connect((err,res)=>{
    if (err) throw err;
    console.log("connected to Mysql")    
})


app.listen(8080, function() {
    console.log('Server is listening on port 8080');
});


