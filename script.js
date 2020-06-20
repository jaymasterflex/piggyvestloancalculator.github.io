//get input var

const loanForm = document.getElementById("loan-form");
const amount = document.getElementById("amount");
const interest = document.getElementById("interest");
const timePeriod = document.getElementById("time");

//get display variable

const monthlypayment = document.getElementById("monthlyPayment");
const totalPayment = document.getElementById("totalPayment");
const interestPaid = document.getElementById("interestPaid");

const calculateResults = (e) => {

    const principal = parseFloat(amount.value);

    //interest per month
    const i = parseFloat(interest.value) / 100 / 12;

    //number of months
    const n = parseFloat(timePeriod.value) * 12;

    const monthly = i * principal / (1 - Math.pow(1 + i, -n));



    let totalAmount, totalInterest;

    if(isFinite(monthly)) {
        //calculate the total amount paid
        totalAmount = monthly * n;

        //calcaulate interest paid
        totalInterest = totalAmount - principal;
    }
    else {
        alert('please check value entered')
    }

    monthlypayment.value = monthly.toFixed(2);

    totalPayment.value = totalAmount.toFixed(2);

    interestPaid.value = totalInterest.toFixed(2);

        e.preventDefault();
}

calculateResults();