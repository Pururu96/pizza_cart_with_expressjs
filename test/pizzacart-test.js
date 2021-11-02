import cart from './PizzaCartFF';
import { equal } from "assert";

describe('The Small Pizza price', function(){
    it('should reflect as 49.00 when the a small pizza is purchased', function(){
        const pizza_cart = cart();
        pizza_cart.buttonClick('small');
        equal(49.00, totals.smallCost());
    
});
describe('The Medium pizza price', function(){
it('should reflect as 89.00 when a medium pizza is purchased', function(){
    const pizza_cart = cart();
    pizza_cart.buttonClick('medium');
    equal(89.00, totals.mediumCost());
});

describe('The Large pizza price', function(){
    it('should reflect as 129.00 when a large pizza is purchased', function(){
        const pizza_cart = cart();
        pizza_cart.buttonClick('large'); 
        equal(129.00, totals.largeCost());
    });
    
});
});
});
