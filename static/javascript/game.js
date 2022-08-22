const borderPosition = document.querySelectorAll('[data-cell]');

const X_CLASS= 'x'
const O_CLASS= 'o'
var playerTurn = true;

 const gameLoop=borderPosition.forEach(cell=> {
    cell.addEventListener('click', (e)=> {
      place(e);

    },{once:true}); // once mean only you can click one time
     });

     function place(e) {
      const cell = e.target;
      if( cell.classList.contains(currentClass)) return 
      DrawCounter++;
      whoIsPLaying();
      hoverBorder();
      swapTurns();
      whoIsTurn();

        cell.classList.add(currentClass) // display player shape


        if (checkWin()) {
          // winner text
          winnerText();
          displaywinierText();
        } 
        if(DrawCounter==9 && !checkWin()){
          DrawTextMessage();
          displaywinierText();

        }
     }


     function whoIsTurn() {
      if (playerTurn) {
        currentClass=O_CLASS;
      } else {
          currentClass=X_CLASS;
        }
        
     }
     let currentClass = 'x'




     const board = document.getElementById('board');

     const hoverBorder = ()=>{
      if (playerTurn) {
        board.classList.remove('x');
        board.classList.add('o');

      } else {
        board.classList.remove('o');
        board.classList.add('x');

      }


     }


function swapTurns() {
  playerTurn=!playerTurn

}

function checkWin () {
   return winChances.some(c =>{
    return c.every(index=>{
      return borderPosition[index].classList.contains(currentClass)
    })
  })
  
}
const winChances=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const playerTurnTxt = document.querySelector('.player-turn-now');
const whoIsPLaying  = ()=>{
      if (!playerTurn) {
        playerTurnTxt.innerHTML ='Player *<span class="x-color-text"> X </span>* Turn';
      } else {
        playerTurnTxt.innerHTML ='Player *<span class="o-color-text"> O </span>* Turn';

      }
}
const winierTextMessage = document.querySelector('[data-wining-message]');

function winnerText (){
  if (!playerTurn) {
    winierTextMessage.innerHTML="X`s Wins"
    
  } else {
    winierTextMessage.innerHTML="O`s Wins"

  }
}
function DrawTextMessage (){
  winierTextMessage.innerHTML="Draw !!!"
}

const displayWinnerItems= document.getElementById('winner-text');
function displaywinierText (){
  displayWinnerItems.classList.add('wining-message-display')
}



function restart(){
  borderPosition.forEach(cell=> {
  cell.classList.remove(X_CLASS)
  cell.classList.remove(O_CLASS)
  displayWinnerItems.classList.remove('wining-message-display')
  cell.removeEventListener('click',place);
  cell.addEventListener('click',place,{once:true});
  playerTurn = false;
   
   whoIsPLaying();
      hoverBorder();
      swapTurns();
      whoIsTurn();
      DrawCounter=0;
  })
}

let DrawCounter=0;
