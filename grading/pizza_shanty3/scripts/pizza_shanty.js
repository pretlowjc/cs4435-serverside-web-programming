

function total() {
    let total = 0;
    let order = document.getElementsByClassName("Order"); 
    let tip = document.getElementById("tip");
    let tax = 1.088 //8.8% tax

    for (let i = 0; i < order.length; i++) {
        total += parseFloat(order[i].value,10); //converts to a float value and in base 10
    }

    total = total * tip.value * tax; 
    

    document.getElementById("total").textContent = "Total Cost of Pizza: $" + total.toFixed(2);
}

function clear() {

  let total = 0;
    
    document.getElementById("total").textContent = "Total Cost of Pizza: $" + total.toFixed(2);

}
clear();
total();