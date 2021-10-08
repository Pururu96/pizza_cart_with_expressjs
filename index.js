var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var PizzaCart = require('./pizzaCartFF')
var app = express();
var pizzaCart = PizzaCart();

//set up view engine
app.engine('handlebars', exphbs({ 
    defaultLayout: 'main',
    layoutsDir : './views/layouts'
}));
app.set('view engine', 'handlebars');

// parse application/x -www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))






const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
})