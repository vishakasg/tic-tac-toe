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



//  initialize a board with an array of nine empty strings. 
// 'isGameActive' variable will be true until someone WINS or DRAW
var board = ['', '', '', '', '', '', '', '', ''];
var player1 ='X'
var player2 ='O'
var currentTurn = player1
var isGameActive = true;
var player1_won = 'WINNER';
var player2_won= 'WINNER';
var draw = 'DRAW THE GAME';


// WINNING CONDITIONS
var win = [
    [1, 2, 3]
    [4, 5, 6]
    [7, 8, 9]
    [1, 4, 7]
    [2, 5, 8]
    [3, 6, 9]
    [1, 5, 9]
    [3, 5, 7]
]




 


