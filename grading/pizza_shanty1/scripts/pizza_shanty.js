const pricePerTopping = 1;
		
const smallPrice = 10;
const medPrice = 12;
const largePrice = 14;
const giantPrice = 18;
		
const thinPrice = 0;
const panPrice = 0;
const stuffedPrice = 1;
const squarePrice = 0.5;
		
const extraCheesePrice = 1.4;
		
const tax = 0.088;
		
const bigTip = 0.25;
const medTip = 0.2;
const smallTip = 0.18;
const smallestTip = 0.15;

let toppingTotal = 0;
let sizeTotal = smallPrice;
let crustTotal = thinPrice;
let extraTotal = 0;

let tipPercent = 0.25;

let subtotal = 0;
let total = 0;

// reset all pizza options to defaults
function clear() {
	let radioTop = document.getElementById('zeroTop');
	radioTop.checked = true;
	
	let radioSmall = document.getElementById('smallSz');
	radioSmall.checked = true;
	
	let radioThin = document.getElementById('thinCrst');
	radioThin.checked = true;
	
	let checkCheese = document.getElementById('xtraCheese');
	checkCheese.checked = false;
	
	toppingTotal = 0;
	sizeTotal = smallPrice;
	crustTotal = thinPrice;
	extraTotal = 0;
	
	displayTotals();
}

// update the total displays
function displayTotals() {
	updateTotals();
	
	let sub = document.getElementById('subtotal');
	sub.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
	
	updateDisplayedTips();
	
	let tot = document.getElementById('total');
	tot.textContent = `Total: $${total.toFixed(2)}`;
}

// update the totals
function updateTotals() {
	subtotal = toppingTotal + sizeTotal + crustTotal + extraTotal;
	subtotal += subtotal * tax;
	
	total = subtotal + (subtotal * tipPercent);
}

// update the addition to the price for the amount of toppings
function updateToppings() {
	let eles = document.getElementsByName('toppings');
	for (i = 0; i < eles.length; i++) {
		if (eles[i].checked)
			toppingTotal = eles[i].value * pricePerTopping;
	}
	displayTotals();
}

// update the addition to the price for the size
function updateSize() {
	let eles = document.getElementsByName('size');
	for (i = 0; i < eles.length; i++) {
		if (eles[i].checked) {
			if (eles[i].value == 'small')
				sizeTotal = smallPrice;
			else if (eles[i].value == 'medium')
				sizeTotal = medPrice;
			else if (eles[i].value == 'large')
				sizeTotal = largePrice;
			else if (eles[i].value == 'giant')
				sizeTotal = giantPrice;
		}
	}
	displayTotals();
}

// update the addition to the price for the crust type
function updateCrust() {
	let eles = document.getElementsByName('crust');
	for (i = 0; i < eles.length; i++) {
		if (eles[i].checked) {
			if (eles[i].value == 'thin')
				crustTotal = thinPrice;
			else if (eles[i].value == 'pan')
				crustTotal = panPrice;
			else if (eles[i].value == 'stuffed')
				crustTotal = stuffedPrice;
			else if (eles[i].value == 'square')
				crustTotal = squarePrice;
		}
	}
	displayTotals();
}

// update the addition to the price of extras
function updateExtra() {
	extraTotal = 0;
	
	let xCheese = document.getElementById('xtraCheese');
	if (xCheese.checked)
		extraTotal += extraCheesePrice;
	displayTotals();
}

// update the amounts displayed as pre-calculated tip options
function updateDisplayedTips() {
	let bt = document.getElementById('btL');
	bt.innerHTML = `$${((subtotal*bigTip)).toFixed(2)} (${bigTip*100}%)`;
	
	let mt = document.getElementById('mtL');
	mt.innerHTML = `$${(subtotal*medTip).toFixed(2)} (${medTip*100}%)`;
	
	let st = document.getElementById('stL');
	st.innerHTML = `$${((subtotal*smallTip)).toFixed(2)} (${smallTip*100}%)`;
	
	let stt = document.getElementById('sttL');
	stt.innerHTML = `$${(subtotal*smallestTip).toFixed(2)} (${smallestTip*100}%)`;
}

// update the tip amount
function findTip() {
	updateTotals();
	let eles = document.getElementsByName('tip');
	for (i = 0; i < eles.length; i++) {
		if (eles[i].checked) {
			if (eles[i].value == 'big') 
				tipPercent = bigTip;
			else if (eles[i].value == 'medium') 
				tipPercent = medTip;
			else if (eles[i].value == 'small') 
				tipPercent = smallTip;
			else if (eles[i].value == 'smallest') 
				tipPercent = smallestTip;
			else if (eles[i].value == 'no') 
				tipPercent = 0;
		}
	}
	displayTotals();
}


// add event listeners to all buttons and initialize totals
function init() {
	let clearBtn = document.getElementById('clearBtn');
	clearBtn.addEventListener('click', clear);
	
	let topBtns = document.getElementsByName('toppings');
	for (let rb of topBtns) {
		rb.addEventListener('click', updateToppings);
	}
	
	let szBtns = document.getElementsByName('size');
	for (let rb of szBtns) {
		rb.addEventListener('click', updateSize);
	}
	
	let crstBtns = document.getElementsByName('crust');
	for (let rb of crstBtns) {
		rb.addEventListener('click', updateCrust);
	}
	
	let xtraBtns = document.getElementsByClassName('extra');
	for (let btn of xtraBtns) {
		btn.addEventListener('click', updateExtra);
	}
	
	let tipBtns = document.getElementsByName('tip');
	for (let btn of tipBtns) {
		btn.addEventListener('click', findTip);
	}
	
	clear();
	updateTotals();
	findTip();
}

init();