module.exports = function PizzaCart() {
    var smallCost = 0;
    var medCost = 0;
    var largeCost = 0;
    
    var smallPizzaQty = 0;
    var mediumPizzaQty = 0;
    var largePizzaQty = 0;
    var totalCart = 0;

    function buttonClick(event) {
        if (event === ".addBtn1") {
            smallPizzaQty++;
        } else if (event === ".addBtn2") {
            mediumPizzaQty++;
        } else if (event === ".addBtn3") {
            largePizzaQty++;
        }

        if (event === ".subBtn1") {
            smallPizzaQty--;
            if (smallPizzaQty < 0) {
                smallPizzaQty = 0;
            }
        } else if (event === ".subBtn2") {
            mediumPizzaQty--;
            if (mediumPizzaQty < 0) {
                mediumPizzaQty = 0;
            }
        } else if (event === ".subBtn3") {
            largePizzaQty--;
            if (largePizzaQty < 0) {
                largePizzaQty = 0;
            }
        }
    }

    function quantity() {
        return {
            smallPizzaQty,
            mediumPizzaQty,
            largePizzaQty
        }
    }

    function cost() {
        smallCost = (smallPizzaQty * 39).toFixed(2);
        medCost = (mediumPizzaQty * 79).toFixed(2);
        largeCost = (largePizzaQty * 99).toFixed(2);
        totalCart = (smallPizzaQty * 39.00 + mediumPizzaQty * 79.00 + largePizzaQty * 99.00).toFixed(2);

        return {
            smallCost,
            medCost,
            largeCost,
            totalCart
        }
    }

    function change(amount) {
        return (amount - totalCart).toFixed(2);
    }

    function resetCart() {
        smallPizzaQty = 0;
        mediumPizzaQty = 0;
        largePizzaQty = 0;
        smallCost = 0;
        medCost = 0;
        largeCost = 0;
        totalCart = 0;

        return {
            smallPizzaQty,
            mediumPizzaQty,
            largePizzaQty,
            smallCost,
            medCost,
            largeCost,
            totalCart,
        }
    }

    return {
        buttonClick,
        quantity,
        cost,
        change,
        resetCart
    }


}