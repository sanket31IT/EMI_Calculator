document.addEventListener('DOMContentLoaded', function () {
    const loanForm = document.getElementById('loan-form');
    const calculateButton = document.getElementById('calculate-button');
    const resultSection = document.getElementById('result');
    const emiAmountSpan = document.getElementById('emi-amount');
    const totalInterestSpan = document.getElementById('total-interest');
    const totalPaymentSpan = document.getElementById('total-payment');

    calculateButton.addEventListener('click', calculateEMI);

    function calculateEMI() {
        const loanAmount = parseFloat(document.getElementById('loan-amount').value);
        const loanTenure = parseInt(document.getElementById('loan-tenure').value);
        const interestRate = parseFloat(document.getElementById('interest-rate').value);

        if (isNaN(loanAmount) || isNaN(loanTenure) || isNaN(interestRate)) {
            alert('Please enter valid numeric values.');
            return;
        }

        const monthlyInterestRate = interestRate / 100 / 12;
        const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) /
            (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
        const totalPayment = emi * loanTenure;
        const totalInterest = totalPayment - loanAmount;

        emiAmountSpan.textContent = emi.toFixed(2);
        totalInterestSpan.textContent = totalInterest.toFixed(2);
        totalPaymentSpan.textContent = totalPayment.toFixed(2);

        resultSection.classList.remove('hidden');
    }
});
