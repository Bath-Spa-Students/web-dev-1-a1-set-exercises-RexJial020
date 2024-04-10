document.addEventListener("DOMContentLoaded", function() {
    const petrolCostInput = document.getElementById("petrolCost");
    const litersInput = document.getElementById("liters");
    const calculateBtn = document.getElementById("calculateBtn");
    const totalCostDisplay = document.getElementById("totalCost");

    calculateBtn.addEventListener("click", function() {
        const petrolCost = parseFloat(petrolCostInput.value);
        const liters = parseFloat(litersInput.value);
        const totalCost = petrolCost * liters;
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});
