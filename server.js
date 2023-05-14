const express = require('express');
var bodyParser = require('body-parser')
var signup = require('./database/signup')
const path = require('path')
const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/scss', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/scss')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static('public'))


// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});


app.post("/signup_request", urlencodedParser, (req,res) =>{
  signup.signup_person(req.body.username, req.body.email, req.body.password);
  res.redirect('/');
})

app.listen(8080, () => {
  console.log('App listening on port 8080');
});