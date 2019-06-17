var express = require('express');
const cors = require('cors');
bodyParser = require('body-parser');
app = express(),
port = process.env.PORT || 4000;



var appRoutes = require('./app/routes/appRoutes');

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', appRoutes);
app.get('/', (req, res) => res.send('Welcome to Inshorts Express'));

app.use(function(e, req, res, next) {
    if (e.message === "Bad request") {
        res.render('index', { title: 'Hey', message: 'Oopsss URL not Found' })
    }
});

app.listen(port, function () {
       console.log("Running sever on port " + port);
       });