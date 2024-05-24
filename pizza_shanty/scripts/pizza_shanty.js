function numToppings() {
    /*
        Add an additional extra $1 for each topping they get.
    */
    var ele = document.getElementsByName('toppings');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("top-list").innerHTML
                = "Number of Toppings: " + ele[i].value;
        }
    }

}

function typeCrust() {
    /*
        thin = no extra
        pan = no extra 
        stuffed = add $1 to the price
        square = add $0.50 to the price
    */
    var ele = document.getElementsByName('crust_type');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("crust-list").innerHTML
                = "Type of Crust: " + ele[i].value;
        }
    }

}

function sizeCrust() {
    /*
        Prices for sizes: 
        small = $10
        medium = $12
        large = $14
        giant = $18
    */
    var ele = document.getElementsByName('size');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("size-list").innerHTML
                = "Size of Pizza: " + ele[i].value;
        }
    }
}

function cheesyness() {
    var ele = document.getElementsByName('cheese_amount');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("cheese-list").innerHTML
                = "Amount of Cheese: " + ele[i].value;
        }
    }
}   

function clear() {
    var top = document.getElementsByName('toppings');
    for (i = 0; i < top.length; i++) {
        if (top[i].checked) {
            if (top[i].value !== "0") {
                var default_top = document.querySelector('input[name="toppings"][value="0"]');
                default_top.checked = true;
            }
        }
    }

    var size = document.getElementsByName('size');
    for (i = 0; i < size.length; i++) {
        if (size[i].checked) {
            if (size[i].value !== "Small") {
                var default_size = document.querySelector('input[name="size"][value="Small"]');
                default_size.checked = true;
            }
        }
    }

    var crust = document.getElementsByName('crust_type');
    for (i = 0; i < crust.length; i++) {
        if (crust[i].checked) {
            if (crust[i].value !== "Thin") {
                var default_crust = document.querySelector('input[name="crust_type"][value="Thin"]');
                default_crust.checked = true;
            }
        }
    }

    var cheese = document.getElementsByName('cheese_amount');
    for (i = 0; i < cheese.length; i++) {
        if (cheese[i].checked) {
            if (cheese[i].value !== "Regular") {
                var default_cheese = document.querySelector('input[name="cheese_amount"][value="Regular"]');
                default_cheese.checked = true;
            }
        }
    }

    location.reload();
    return;
}

function total() {
    /*
        Add all together and include tax.
        Tax: 0.088, The tax is the total of everything else added on multiplied by 0.088.
    */
    var top = numToppings();
    var type = typeCrust();
    var size = sizeCrust();

    var total = top + type + size;

    document.getElementById("total").innerHTML = "Total: " + total;
}

