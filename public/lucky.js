let rolls = [];
let maxBet = [];
let moneyHighRolls = [];


let startingBet = function () {
    let money = parseInt(prompt('How much money will you risk?'));

    if ((isNaN(money))) {
        alert('Error, That is not a valid bet, enter a number!');
    }
    else if (money <= 0) {
        alert('Error, Please enter a number greater than zero');
    }
    else {
        document.getElementById("amount").innerHTML = `$${money}.00`;
        let bankroll = money;
        while (bankroll > 0) {
            let dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
            let dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
            let diceRoll = dice1 + dice2;

            if (diceRoll === 7) {
                bankroll += 4;
                rolls.push(diceRoll);
                console.log(bankroll);
                maxBet.push(bankroll);
                
            } else {
                bankroll--
                rolls.push(diceRoll);
                console.log(bankroll);
            }
            if (bankroll === 0) {
                console.log(rolls.length - 1);
                console.log(Math.max.apply(null, maxBet));
            }
        }
    }
}

document.getElementById("btn").addEventListener("click", diceRoll);

function diceRoll() {
    startingBet();
    document.getElementById("btn").innerHTML = "Play Again";
}





