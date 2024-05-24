// Get the necessary HTML elements
const toppings = document.getElementById("toppings");
const crustSize = document.getElementById("crustSize");
const crustType = document.getElementById("crustType");
const extraCheese = document.getElementById("extraCheese");
const tip = document.getElementById("tip");
const totalText = document.getElementById("total");

// Clear the form
function resetForm() {
    toppings.selectedIndex = 0;
    crustSize.selectedIndex = 0;
    crustType.selectedIndex = 0;
    extraCheese.selectedIndex = 0;
    tip.selectedIndex = 0;
    totalText.textContent = "";
  }

// Calculate the total
function total() {
  // Get the values from the form
  const toppingsValue = Number(toppings.value);
  const crustSizeValue = Number(crustSize.value);
  const crustTypeValue = Number(crustType.value);
  const extraCheeseValue = Number(extraCheese.value);
  const tipValue = Number(tip.value);

  // Calculate the total cost
  const baseCost = crustSizeValue + crustTypeValue;
  const toppingsCost = toppingsValue > 0 ? (toppingsValue - 1) * 1 : 0;
  const extraCheeseCost = extraCheeseValue;
  const tipAmount = baseCost * tipValue;
  const totalCost = baseCost + toppingsCost + extraCheeseCost + tipAmount;

  // Display the total cost
  totalText.textContent = `Total: $${totalCost.toFixed(2)}`;
}