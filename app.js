const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-btn");
const outputBox = document.querySelector("#output");

showBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var initial = Number(initialPrice.value);
  var quantity = Number(quantityOfStocks.value);
  var current = Number(currentPrice.value);

  if (!initial || !quantity || !current) {
    showMessage("Enter all the fields");
  } else {
    calculateProfitLoss(initial * quantity, current * quantity);
  }
}

function calculateProfitLoss(initial, current) {
  if (current > initial) {
    //Profit
    var profit = current - initial;
    var profitPercentage = (profit / initial) * 100;
    profitPercentage = profitPercentage.toFixed(2);
    showMessage(
      `Yay!! Your profit is ${profit} and profit percentage is ${profitPercentage}% :)`,
      "green"
    );
  } else if (current < initial) {
    //Loss
    var loss = initial - current;
    var lossPercentage = (loss / initial) * 100;
    lossPercentage = lossPercentage.toFixed(2);
    showMessage(
      `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`,
      "red"
    );
  } else {
    showMessage("No pain, no gain and no gain, so no pain");
  }
}

function showMessage(message, color) {
  outputBox.style.color = color;
  outputBox.innerText = message;
}
