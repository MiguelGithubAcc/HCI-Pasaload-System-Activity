const users = {
    "091234567890": 100, 
    "099876543210": 0,    
};

function transferLoad() {
    const senderInput = document.getElementById("sender");
    const recipientInput = document.getElementById("recipient");
    const amountInput = document.getElementById("amount");
    const outputDiv = document.getElementById("output");

    const sender = senderInput.value.trim();
    const recipient = recipientInput.value.trim();
    const amount = parseInt(amountInput.value);

    if (!users.hasOwnProperty(sender) || !users.hasOwnProperty(recipient)) {
        outputDiv.textContent = "Invalid sender or recipient phone number. Please input the proper information";
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        outputDiv.textContent = "Invalid amount. Please input the proper amount";
        return;
    }

    if (users[sender] < amount) {
        outputDiv.textContent = "Insufficient balance. Please check the balance again";
        return;
    }

    users[sender] -= amount;
    users[recipient] += amount;

    outputDiv.textContent = `Success! You have successfully transferred ${amount} Php from phone number: ${sender} to ${recipient}.`;

    updateDisplayedBalances();
}

function displayInitialBalance() {
    const outputDiv = document.getElementById("output");
    let balancesOutput = "Initial Balances:<br>";
    for (const [phoneNumber, balance] of Object.entries(users)) {
        balancesOutput += `${phoneNumber}: ${balance}<br>`;
    }
    outputDiv.innerHTML = balancesOutput;
}

function updateDisplayedBalances() {
    const outputDiv = document.getElementById("output");
    let balancesOutput = "<br><br>Current Balances:<br>";
    for (const [phoneNumber, balance] of Object.entries(users)) {
        balancesOutput += `${phoneNumber}: ${balance}<br>`;
    }
    outputDiv.innerHTML += balancesOutput;
}


