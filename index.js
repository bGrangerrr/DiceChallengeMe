
function refreshChangeImg() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;  
 
    const myDice1 = document.getElementById("dice_1");
    const myDice2 = document.getElementById("dice_2");

    switch (randomNumber1) {
        case 1:
            myDice1.src = "dice1.png";
            break;
        case 2:
            myDice1.src = "dice2.png";
            break;
        case 3:
            myDice1.src = "dice3.png";
            break;   
        case 4:
            myDice1.src = "dice4.png";
            break;
        case 5:
            myDice1.src = "dice5.png";
            break;
        case 6:
            myDice1.src = "dice6.png";
            break;
        default:
            console.log("Impossible getting here!");
            break;
    }

    switch (randomNumber2) {
        case 1:
            myDice2.src = "dice1.png";
            break;
        case 2:
            myDice2.src = "dice2.png";
            break;
        case 3:
            myDice2.src = "dice3.png";
            break;   
        case 4:
            myDice2.src = "dice4.png";
            break;
        case 5:
            myDice2.src = "dice5.png";
            break;
        case 6:
            myDice2.src = "dice6.png";
            break;
        default:
            console.log("Impossible getting here!");
            break;
    }

    return whoIsWinner(randomNumber1, randomNumber2);
}

function whoIsWinner(randomNumber1, randomNumber2) {

    if (randomNumber1 > randomNumber2) {

        document.getElementById("h1_title").innerHTML = "Player 1 Wins!!!";

    } else if (randomNumber1 < randomNumber2) {

        document.getElementById("h1_title").innerHTML = "Player 2 Wins!!!";

    } else if (randomNumber1 === randomNumber2) {

        document.getElementById("h1_title").innerHTML = "DRAW!!!";
        
    }

    return randomNumber1, randomNumber2;    
}

let button = document.getElementById("btnn-random");

button.addEventListener("click", refreshChangeImg);

window.addEventListener("load", whoIsWinner);
