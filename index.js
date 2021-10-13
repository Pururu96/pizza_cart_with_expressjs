var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var PizzaCart = require('./PizzaCartFF')
var express = require('express')
var app = express();
var pizzaCart = PizzaCart();

// set up view engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

// parse application/x -www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

var counter = 0;

app.get('/', function (req, res) {
    res.render('index', {
        cost: pizzaCart.cost(),
        quantity: pizzaCart.quantity()
    })
}
    , app.post('/pizzacart', function (req, res) {
        pizzaCart.cost(req.body);
        res.redirect('/')
    })

    , app.post('/count', function (req, res) {
        counter++;
        res.redirect('/')
    }));

const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
})