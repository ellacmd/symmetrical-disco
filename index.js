// Assignment
let inputText = document.getElementById("input-text");
let inputAmount = document.getElementById("input-amount");
let incomeEntry = document.getElementById("inc");
let expenseEntry = document.getElementById("exp");
const totalContainer = document.querySelector('.amount-available')

let amtAvailable = 0;
// Add event listeners to the buttons
document.querySelector(".add-income").addEventListener("click", addIncome);
document.querySelector(".add-expense").addEventListener("click", addExpense);

function addIncome(e) {
  e.preventDefault();
  if (inputText.value === "" || inputAmount.value === "") {
    alert("input your income/expenditure");
  } else {
    // create list container for income
    let incomeBox = document.createElement("div");
    incomeBox.className = "incBox";
    // create a p element inside the div and give it a class
    let incomeText = document.createElement("p");
    incomeText.className = "incText";
    let incomeNum = document.createElement("p");
    incomeNum.className = "incNum";
    let icon = document.createElement("p");
    icon.className = "icon";
    let dollar = document.createElement("p");
    dollar.innerText = "$";

    // set the value of the p element to whatever is in the input box
    incomeText.innerText = inputText.value;
    incomeNum.innerText = inputAmount.value;
    icon.innerHTML = ' <i class="fa fa-trash" aria-hidden="true"></i> ';
    // put text and amount in their own div
    let textBox = document.createElement("div");
    let amountBox = document.createElement("div");
    amountBox.className = "amount-box";

    textBox.appendChild(incomeText);
    amountBox.appendChild(dollar);
    amountBox.appendChild(incomeNum);
    incomeBox.appendChild(textBox);
    incomeBox.appendChild(amountBox);
    incomeBox.appendChild(icon);
    incomeEntry.appendChild(incomeBox);

    inputText.value = "";
    inputAmount.value = "";
    sumIncome();
  }
}

function addExpense(e) {
  e.preventDefault();
  if (inputText.value === "" || inputAmount.value === "") {
    alert("input your income/expenditure");
  } else {
    // create container
    let expenseBox = document.createElement("div");
    expenseBox.className = "expBox";
    // create a p element inside the div and give it a class
    let expenseText = document.createElement("p");
    expenseText.className = "expText";
    let expenseNum = document.createElement("p");
    expenseNum.className = "expNum";
    let icon = document.createElement("p");
    icon.className = "icon";
    let dollar = document.createElement("p");
    dollar.innerText = "$";

    // set the value of the p element to whatever is in the input box
    expenseText.innerText = inputText.value;
    expenseNum.innerText = inputAmount.value;
    icon.innerHTML = ' <i class="fa fa-trash" aria-hidden="true"></i> ';
    // put text and amount in their own div
    let expTextBox = document.createElement("div");
    let expAmountBox = document.createElement("div");
    expAmountBox.className = "amount-box";

    expTextBox.appendChild(expenseText);
    expAmountBox.appendChild(dollar);
    expAmountBox.appendChild(expenseNum);
    expenseBox.appendChild(expTextBox);
    expenseBox.appendChild(expAmountBox);
    expenseBox.appendChild(icon);
    expenseEntry.appendChild(expenseBox);

    inputText.value = "";
    inputAmount.value = "";

    sumExpense();
  }
}

function sumExpense () {
  const expenseContainer = document.querySelector('.amount-spent');
  const expense = document.querySelectorAll('.expNum');
  // making nodelist an array
  const expArray = [...expense];
  const totalExpense = expArray
  .map(item => parseInt(item.innerText))
  .reduce((acc, cur) => acc + cur, 0);
  expenseContainer.innerHTML = totalExpense;

    
  const income = document.querySelector('.amount-earned').innerHTML;

  const incomeNum = parseInt(income) || 0;
 
  amtAvailable = incomeNum - totalExpense;

  totalContainer.innerHTML = amtAvailable;

  
}
function sumIncome(){
  
  const incomeContainer = document.querySelector('.amount-earned');
  const income = document.querySelectorAll('.incNum');


  const incArray = [...income];
  totalIncome = incArray
  .map(item => parseInt(item.innerText))
  .reduce((acc, cur) => acc + cur, 0);


  incomeContainer.innerHTML = totalIncome;

  const expense = document.querySelector('.amount-spent').innerHTML;

  const expenseNum = parseInt(expense) || 0;
 
  amtAvailable = totalIncome - expenseNum;

  totalContainer.innerHTML = amtAvailable;
}
