
// Stocker la valeur du dé dans les différents score des joueurs 
var playerRound1;
var playerRound2;
var totalPlayer1;
var totalPlayer2;
var currentPlayer;
var centoryu = 100


// Récupération des Elements du Dice 
const dots1 = document.getElementById('dots1');
const dots2 = document.getElementById('dots2');
const dots3 = document.getElementById('dots3');
const dots4 = document.getElementById('dots4');
const dots5 = document.getElementById('dots5');
const dots6 = document.getElementById('dots6');
const dots7 = document.getElementById('dots7');
const dots8 = document.getElementById('dots8');
const dots9 = document.getElementById('dots9');


// Function représentant les faces du dé
function face1 () {
    dots1.style.display = 'none';
    dots2.style.display = 'none';
    dots3.style.display = 'none'; 
    dots4.style.display = 'none';
    dots5.style.display= 'block';
    dots6.style.display = 'none';
    dots7.style.display = 'none';
    dots8.style.display = 'none';
    dots9.style.display = 'none';
 };
 
 function face2 () {
     dots1.style.display = 'none';
     dots2.style.display = 'block';
     dots3.style.display = 'none';
     dots4.style.display = 'none';
     dots5.style.display = 'none';
     dots6.style.display = 'none';
     dots7.style.display = 'none';  
     dots8.style.display = 'block';
     dots9.style.display = 'none';
 };
 
 function face3 () {
     dots1.style.display = 'none';
     dots2.style.display = 'none';
     dots3.style.display = 'block';
     dots4.style.display = 'none';
     dots5.style.display = 'block';
     dots6.style.display = 'none';
     dots7.style.display = 'block';
     dots8.style.display = 'none';
     dots9.style.display = 'none';
 }
 
 function face4 () {
    dots1.style.display = 'block';
    dots2.style.display = 'none';
    dots3.style.display = 'block';
    dots4.style.display = 'none';
    dots5.style.display = 'none';
    dots6.style.display = 'none';
    dots7.style.display = 'block';
    dots8.style.display = 'none';
    dots9.style.display = 'block';
 }
 
 function face5 () {
     dots1.style.display = 'block';
     dots2.style.display = 'none';
     dots3.style.display = 'block'
     dots4.style.display = 'none';
     dots5.style.display = 'block';
     dots6.style.display = 'none';
     dots7.style.display = 'block';
     dots8.style.display = 'none';
     dots9.style.display = 'block';
 }
 
 function face6 () {
    dots1.style.display = 'block';
    dots2.style.display = 'none';
    dots3.style.display = 'block';
    dots4.style.display = 'block';
    dots5.style.display = 'none';
    dots6.style.display = 'block';
    dots7.style.display = 'block';
    dots8.style.display = 'none';
    dots9.style.display = 'block';
 }
// Création de la function resetScore qui permet de reset les scores sur les éléments du ROUND et du GLOBAL
const resetScore = function () {
    playerRound1 = 0
    playerRound2 = 0
    totalPlayer1 = 0
    totalPlayer2 = 0
    document.getElementById('round-p1').textContent = playerRound1
    document.getElementById('round-p2').textContent = playerRound2
    document.getElementById('global-p1').textContent = totalPlayer1
    document.getElementById('global-p2').textContent = totalPlayer2
}
// Création de la function newGame qui permet d'appeler la function resetScore afin de repartir à zero, turn1 qui permet de donner le lead au joueur 1 et face6 qui permet d'afficher la face 6 du dé par défaut
const newGame = function () {
    resetScore();
    turn1();
    face6();
}

  // Functions turn1 et turn2 qui permettent d'afficher le dot rouge du joueur actif 
function turn1() {       
    const turn1Element = document.getElementById('turn1')    
    const turn2Element = document.getElementById('turn2')
    turn1Element.className = 'active'; 
    turn2Element.className = 'hide';
    currentPlayer = 1;
 }

function turn2() {    
    const turn1Element = document.getElementById('turn1')
    const turn2Element = document.getElementById('turn2')          // Tour du joueur 2
    turn1Element.className = 'hide';
    turn2Element.className = 'active';
    currentPlayer = 2;
}

// Générer un nombre aléatoire entre 1 & 6

const getRoll = function () {
    const decimalNumber = (Math.random() * 6) + 1
    const number = Math.trunc(decimalNumber)
    return number
}



// Afficher le résultat entre 1 & 6 puis lui indiquer des conditions en fonction du résultat
const clickRollDice = function () {
    const result = getRoll() 
    if (result === 1) {
        face1();
        valueReset();
        swapTurn();
    }
    else {

        if (result === 2) {
            face2();  
        } 
        else if (result === 3) {
            face3();
           
        }
        else if (result === 4) {
            face4();
           
        }
        else if (result === 5) {
            face5();
           
        }
        else if (result === 6) {
            face6();
            
        }
        test1(result)
    }

    

    console.log(result) 
} 


// Creation de la function test1 qui permet de stocker la valeur du score ROUND
const test1 = function (value) {

    if (currentPlayer === 1) {
        playerRound1 += value
        document.getElementById('round-p1').textContent = playerRound1
    }
    else {
        playerRound2 += value
        document.getElementById('round-p2').textContent = playerRound2
    }
}
//Création de la fonction valueReset qui permet de reset les valeurs du score du ROUND
const valueReset = function () {
    if (currentPlayer === 1) {
        playerRound1 = 0
        document.getElementById('round-p1').textContent = playerRound1
    }
    else {
        playerRound2 = 0
        document.getElementById('round-p2').textContent = playerRound2
    }
}
// Création de la function swapTurn qui permet de changer le joueur actif 
const swapTurn = function () {
    console.log('swapTurn')
    if (currentPlayer === 1) {
        turn2();
        console.log('swapTurn1')
    }
       
    else {
        turn1();
        console.log('swapTurn2')
    }
}   

// Creation de la function Hold qui permet de stocker les points du round dans le Global, d'appeler la fonction swapTurn puis d'afficher une alerte en condition de victoire
const hold = function () {
    var valueToTest;
    if (currentPlayer === 1) {
     totalPlayer1 += playerRound1
     document.getElementById('global-p1').textContent = totalPlayer1
     valueToTest = totalPlayer1
     
     
    }
    else {
        totalPlayer2 += playerRound2
        document.getElementById('global-p2').textContent = totalPlayer2
        valueToTest = totalPlayer2
    }

    if (valueToTest >= centoryu) {
        alert ('Félicitation Joueur ' + currentPlayer)
        newGame();  
    }
    else{
        valueReset();
        swapTurn();
    }
}


// Créer un événement de type 'click' sur l'élément Roll Dice

const rollDice = document.getElementById('roll-dice');
rollDice.addEventListener('click', clickRollDice);

// Créer un événement de type 'click' sur l'élément New Game


const newGameElement =  document.getElementById('newgame');
newGameElement.addEventListener('click', newGame);

// Créér un événement de type 'click' sur l'élément Hold 

const holdElement = document.getElementById('hold');
holdElement.addEventListener('click', hold)


