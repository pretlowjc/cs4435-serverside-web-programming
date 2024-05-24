
let total = 0;
let tip = 0;
let toppings = 0;
let sizeprice = 10;
let crustprice = 0;
let cheeseprice = 0;
let taxtotal = 0;

function checkcheese() {
	if (document.getElementById('extracheese').checked == 1)
	{
		cheeseprice = 1.40;
	}
	else
	{
		cheeseprice = 0;
	}
	calcTotal();
}

function clearCheesePrice() {
	document.getElementById("extracheese").checked = false;
	cheeseprice = 0;
}

function updateTopping(num) {
	document.querySelector( '#Toppings *:nth-child(2)').value = num;
	toppings = num
	calcTotal();
}

function clearTopping() {
	document.querySelector( '#Toppings *:nth-child(2)').value = "0";
	toppings = 0;
}

function updateSize(size, price) {
	document.querySelector( '#Size *:nth-child(2)').value = size;
	sizeprice = price;
	calcTotal();
}

function clearSize() {
	document.querySelector( '#Size *:nth-child(2)').value = 'S';
	sizeprice = 10;
}

function updateCrust(crust, price) {
	document.querySelector( '#Crust *:nth-child(2)').value = crust;
	crustprice = price;
	calcTotal();
}

function clearCrust() {
	document.querySelector( '#Crust *:nth-child(2)').value = "Thin";
	crustprice = 0;
}

function addTip() {
	tip = document.querySelector( '#Tip *:nth-child(2)').value;
	calcTotal();
}

function clearTip() {
	tip = 0;
	document.querySelector( '#Tip *:nth-child(2)').value = '$' + tip.toFixed(2);
	calcTotal();
}

function calcTotal() {
	total = 0;
	total += toppings;
	total += sizeprice;
	total += crustprice;
	total += cheeseprice;
	total += Number(tip);
	total = Number(total * 1.088).toFixed(2);
	document.querySelector( '#Total *:nth-child(2)').value = '$' + total;
}

function clearTotal() {
	clearCrust();
	clearSize();
	clearTopping();
	clearCheesePrice();
	clearTip();
}
