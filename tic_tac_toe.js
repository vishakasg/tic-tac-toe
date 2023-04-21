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
var  whosTurn = player1

board.addEventListener("click", function (event) {
    var clickedBox = event.target
    
    if (whosTurn === player1) {
        clickedBox.textContent = 'X' 
        whosTurn = player2
    } else {
           clickedBox.textContent = 'O'
           whosTurn = player1
        }
})

//winning conditions
for (var i = 1; i < 10; i++)
if (b1 === X && b2 === X && b3 === X){
    
}





   
    













 


