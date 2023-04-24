// Setting DOM to all the boxes inside the grid
var b1 = document.querySelector('#box1')
var b2 = document.querySelector('#box2')
var b3 = document.querySelector('#box3')
var b4 = document.querySelector('#box4')
var b5 = document.querySelector('#box5')
var b6 = document.querySelector('#box6')
var b7 = document.querySelector('#box7')
var b8 = document.querySelector('#box8')
var b9 = document.querySelector('#box9')

//Initial State..
// define two players as 'X and 'O' and created the empty (array) play board to start the game.
//if boardFull variable is TRUE then play board is full and the game is end, and the playBoard array will hold the state of the game.
//variable board is used to select the element on the grid
var player1 ='X'
var player2 ='O'
var boardFull = false
var playBoard = ['', '', '', '', '', '', '', '', ''];


// event listener
var board = document.querySelector('.grid')
var currentPlayer = player1
var winnerMessage = document.querySelector('#winner')
var countTheTurn = 0
var isGameWin = false
board.addEventListener("click", function (event) {
    var clickedBox = event.target
    if (currentPlayer === player1) {
        if (clickedBox.textContent !== 'O')
        clickedBox.textContent = 'X' 
        countTheTurn++;
        currentPlayer = player2
        
        if (b1.textContent == 'X' && b2.textContent == 'X' && b3.textContent == 'X'){
            isGameWin = true;
            winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b4.textContent == 'X' && b5.textContent == 'X' && b6.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            }  else if (b7.textContent == 'X' && b8.textContent == 'X' && b9.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b1.textContent == 'X' && b4.textContent == 'X' && b7.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b2.textContent == 'X' && b5.textContent == 'X' && b8.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b3.textContent == 'X' && b6.textContent == 'X' && b9.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b1.textContent == 'X' && b5.textContent == 'X' && b9 .textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } else if (b3.textContent == 'X' && b5.textContent == 'X' && b7.textContent == 'X'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 1 IS A WINNER'
            } 

    } else if (currentPlayer === player2){
        if (clickedBox.textContent !== 'X')
        clickedBox.textContent = 'O'
        countTheTurn++;
        currentPlayer = player1

        if (b1.textContent == 'O' && b2.textContent == 'O' && b3.textContent == 'O'){
            isGameWin = true;
            winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            
            } else if (b4.textContent == 'O' && b5.textContent == 'O' && b6.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            } else if (b7.textContent == 'O' && b8.textContent == 'O' && b9.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            } else if (b1 .textContent == 'O' && b4.textContent == 'O' && b7.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER' 
            } else if (b2.textContent == 'O' && b5.textContent == 'O' && b8.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            } else if (b3.textContent == 'O' && b6.textContent == 'O' && b9.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            } else if (b1.textContent == 'O' && b5.textContent == 'O' && b9.textContent == 'O'){
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            } else if (b3.textContent == 'O' && b5.textContent == 'O' && b7.textContent == 'O') {
                isGameWin = true;
                winnerMessage.textContent = 'PLAYER 2 IS A WINNER'
            }                         
    } 
    if (countTheTurn === 9 && isGameWin === false) {
        winnerMessage.textContent = 'GAME IS DRAW'
    }    
})








   







   
    













 


