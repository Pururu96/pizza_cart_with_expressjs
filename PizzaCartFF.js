module.exports = function PizzaCart() {
    // var smallCost = 0;
    // var medCost = 0;
    // var largeCost = 0;

    var smallPizzaQty = 0;
    var mediumPizzaQty = 0;
    var largePizzaQty = 0;

    // var hidden = "hidden";

    let actionList = [];

    function counter() {
        return {
            small: smallPizzaQty,
            medium: mediumPizzaQty,
            large: largePizzaQty
        }
    }

    function buttonClick(click) {

        var cost = 0;

        if (click === "small") {
            cost = 49.00;
            smallPizzaQty++;
        } else if (click === "medium") {
            cost = 89.00;
            mediumPizzaQty++;
        } else if (click === "large") {
            cost = 129;
            largePizzaQty++;
        }

        if (click === "subBtn1") {
            cost = -49.00
            smallPizzaQty--;
            if (smallPizzaQty < 0) {
                // smallPizzaQty--;
                smallPizzaQty = 0;
                cost = 0;
            }
        } else if (click === "subBtn2") {
            mediumPizzaQty--;
            cost = -89.00;
            if (mediumPizzaQty < 0) {
                mediumPizzaQty = 0;
                cost = 0;
            }
        } else if (click === "subBtn3") {
            largePizzaQty--;
            cost = -129.00;
            if (largePizzaQty < 0) {
                largePizzaQty = 0;
                cost = 0;
            }
        }
        actionList.push({
            type: click,
            cost
        })
    }

    function getTotal(type) {
        var total = 0;

        for (let index = 0; index < actionList.length; index++) {
            const action = actionList[index];

            if (action.type === type) {

                total += action.cost;
            }
        }
        return total;
    }

    function grandTotal() {
        var total = (getTotal('small') + getTotal('subBtn1') + getTotal('medium') + getTotal('subBtn2') + getTotal('large') + getTotal('subBtn3')).toFixed(2);
        if (total < 0)

            return 0.00;

        else return total;
    }

    function totals() {
        let smallCost =  (getTotal('small') + getTotal('subBtn1')).toFixed(2);
        let medCost = (getTotal('medium')+getTotal('subBtn2')).toFixed(2);
        let largeCost = (getTotal('large')+getTotal('subBtn3')).toFixed(2);

        // if(smallCost < 0) {
        //     smallPizza = 0.00;
        // }
        // if(medCost < 0) {
        //     medPizza = 0.00;
        // }
        // if(largeCost < 0) {
        //     largePizza = 0.00;
        // }



        return {
            smallCost,
            medCost,
            largeCost,
            grandTotal : grandTotal()
        }
      
    }

    function checkoutBtn(){
            hidden = "hidden"
            if (grandTotal > 0 ){
                hidden = "none";
            } else {
                hidden = "hidden";
            }
    }

    // function quantity() {

    //     return {
    //         smallPizzaQty,
    //         mediumPizzaQty,
    //         largePizzaQty
    //     }
    // }

    // function cost() {
    //     smallCost = (smallPizzaQty * 39).toFixed(2);
    //     medCost = (mediumPizzaQty * 79).toFixed(2);
    //     largeCost = (largePizzaQty * 99).toFixed(2);
    //     totalCart = (smallPizzaQty * 39.00 + mediumPizzaQty * 79.00 + largePizzaQty * 99.00).toFixed(2);

    //     return {
    //         smallCost,
    //         medCost,
    //         largeCost,
    //         totalCart
    //     }
    // }


    return {
        counter,
        buttonClick,
        getTotal,
        grandTotal,
        totals,
        checkoutBtn   
    }
}