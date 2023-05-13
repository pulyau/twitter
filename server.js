const express = require('express');
const path = require('path')
const app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/scss', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/scss')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "signup.html"));
});


app.listen(8080, () => {
  console.log('App listening on port 8080');
});