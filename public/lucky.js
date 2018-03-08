function bankroll() {
    let money = parseInt(prompt('How much money will you risk?'));

    if ((isNaN(money))) {
        alert('Error, That is not a number');
    }
    else if (money <= 0) {
        alert('Error, Please enter a number greater than zero');
    }
    else {
        let startingBet = money;
        console.log(startingBet);
    }
}
// bankroll();

document.getElementById("btn").addEventListener("click", diceRoll);

function diceRoll() {
    let bankroll = 100;
    while (bankroll > 0) {
    
    let dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
    let dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
    
        if (dice1 + dice2 === 7) {
            bankroll += 4;
            console.log(bankroll);
        } else 
        bankroll--
        console.log(bankroll);
    }
    
}

