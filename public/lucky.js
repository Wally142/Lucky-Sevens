let rollCount = 0;
let maxBet = [];
let bankHigh = [];

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
        document.getElementById("head2").innerHTML = `$${money}.00`;
        let bankroll = money;
        while (bankroll > 0) {
            let dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
            let dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
            let diceRoll = dice1 + dice2;

            if (diceRoll === 7) {
                bankroll += 4;
                maxBet.push(bankroll);
                // console.log(bankroll);
                rollCount++
            } else {
                bankroll--
                maxBet.push(bankroll);
                // console.log(bankroll);
                rollCount++
            }
            if (bankroll === Math.max.apply(null, maxBet)) {
                // console.log(rollCount);
                bankHigh.push(rollCount);
            }
            else if (bankroll === 0) {
                let max = Math.max.apply(null, maxBet)
                let maxValue = Math.max.apply(null, bankHigh)
                document.getElementById("total1").innerHTML = (rollCount - 1);
                document.getElementById("total2").innerHTML = max;
                document.getElementById("total3").innerHTML = maxValue;
                console.log(rollCount - 1);
                console.log(max);
                console.log(maxValue);
                rollCount = 0
                maxBet = [];
                bankHigh =[];
            }
        }
    }
}

document.getElementById("btn").addEventListener("click", diceRoll);

function diceRoll() {
    startingBet();
    addToDom();
}

function addToDom() {
    document.getElementById("btn").innerHTML = "Play Again";
    document.getElementById("line").innerHTML = '<hr>';
    document.getElementById("header").innerHTML = 'Results';
    document.getElementById("head1").innerHTML = 'Starting Bet';
    document.getElementById("result1").innerHTML = 'Total Rolls Before Going Broke';
    document.getElementById("result2").innerHTML = 'Highest Amount Won';
    document.getElementById("result3").innerHTML = 'Roll Count At Highest Amount Won';
}





