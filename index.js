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

app.get('/', function (req, res) {


    res.render('index', {
        counter: pizzaCart.counter(),
        totals: pizzaCart.totals()
    })
    // counter: pizzaCart.counter(),
    // quantity: pizzaCart.quantity(),
    // buttonClick: pizzaCart.buttonClick()
    // hiddenButton
})

app.post('/pizzacart', function (req, res) {
    pizzaCart.buttonClick(req.body.small)
    pizzaCart.buttonClick(req.body.subBtn1)

    pizzaCart.buttonClick(req.body.medium)
    pizzaCart.buttonClick(req.body.subBtn2)

    pizzaCart.buttonClick(req.body.large)
    pizzaCart.buttonClick(req.body.subBtn3)

    console.log(req.body.small)
    res.redirect('/')

})

app.post('/order', function(req, res){
    pizzaCart.buttonClick(req.body.small)
    pizzaCart.buttonClick(req.body.medium)
    pizzaCart.buttonClick(req.body.large)

    res.redirect('/')
})

const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
})