var cart = require('../pizzaCartFF');
var assert = require("assert");

describe('The Small Pizza price', function(){
    it('should reflect as 49.00 when the a small pizza is purchased', function(){
        const pizza_cart = cart();
        pizza_cart.buttonClick('small');
        assert.equal(49.00, totals.smallCost());
    
});
describe('The Medium pizza price', function(){
it('should reflect as 89.00 when a medium pizza is purchased', function(){
    const pizza_cart = cart();
    pizza_cart.buttonClick('medium');
    assert.equal(89.00, totals.mediumCost());
});

describe('The Large pizza price', function(){
    it('should reflect as 129.00 when a large pizza is purchased', function(){
        const pizza_cart = cart();
        pizza_cart.buttonClick('large'); 
        assert.equal(129.00, totals.largeCost());
    });
    
});
});
});
