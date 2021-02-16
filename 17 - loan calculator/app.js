const calculateBtn = document.querySelector(".button button");
const monthPayNum = document.querySelector(".monthly-payment .result-number");
const totalPayNum = document.querySelector(".total-payment .result-number");
const totalInterNum = document.querySelector(".total-interest .result-number");
// const warningDiv = document.querySelector(".warning");
const resultDiv = document.querySelector(".result");

// console.log(monthPayNum);
calculateBtn.addEventListener("click", calculateLoan);

function calculateLoan(e) {
  e.preventDefault();

  const amountVal = document.querySelector(".amount input").value;
  const interestVal = document.querySelector(".interest input").value;
  const yearVal = document.querySelector(".year input").value;
  let mPayment, totPayment, totInterest;

  if (amountVal !== "" && interestVal !== "" && yearVal !== "") {
    totPayment = amountVal * (1 + interestVal / 100);
    totInterest = (amountVal * interestVal) / 100;
    mPayment = totPayment / (yearVal * 12);

    console.log(totPayment.toFixed(2));
    console.log(totInterest.toFixed(2));
    console.log(mPayment.toFixed(2));

    monthPayNum.textContent = mPayment;
    totalPayNum.textContent = totPayment;
    totalInterNum.textContent = totInterest;

    resultDiv.style.display = "block";
  } else {
    // showWarning();
    // setTimeout(hideWarning, 800);
    createWarning();
    setTimeout(clearWarning, 1000);
  }
}

function showWarning() {
  warningDiv.style.display = "block";
}

function hideWarning() {
  warningDiv.style.display = "none";
}

function createWarning() {
  const div = document.createElement("div");
  div.className = "warning";
  div.textContent = "insert number!";
  console.log(div);
  const form = document.querySelector("form");
  const calculator = document.querySelector(".calculator");
  calculator.insertBefore(div, form);
  // form.insertBefore(div, form);
  // form.inser;
}

function clearWarning() {
  document.querySelector(".warning").remove();
}
