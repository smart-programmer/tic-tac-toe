const borderPosition = document.querySelectorAll('[data-cell]');

const X_CLASS= 'x'
const O_CLASS= 'o'
var playerTurn = false;


var playerTurn = true;
borderPosition.forEach(cell=> {
    cell.addEventListener('click', (e)=> {
      hoverBorder();
      swapTurns();
      whoIsTurn();
      place(e);

      console.log(checkWin());
      if (checkWin()) {
        // winner text
      }
    },{once:true}); // once mean only you can click one time
     });

     function place(e) {
      const cell = e.target;
        cell.classList.add(currentClass)
       
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

