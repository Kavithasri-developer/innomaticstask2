function atmwithdrawal(balance, amount, pin, enteredpin) {
    if (enteredpin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Balance";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    return `Transaction successful! Remaining balance: ${balance - amount}`;
}

function testatm() {
    const balance = Number(document.getElementById("atmbalance").value);
    const amount = Number(document.getElementById("atmamount").value);
    const entered = document.getElementById("enterpin").value;
    const pin = document.getElementById("pin").value;

    const result = atmwithdrawal(balance, amount, pin, entered); // ✅ Fixed function call
    document.getElementById("result").innerText = result;
}