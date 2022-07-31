console.log('hi');
const borderPosition = document.querySelectorAll('.board');

// g.addEventListener('click',()=>{
//     console.log(this.innerHTML);
//     console.log('as');
// })
var playerTurn = true;
borderPosition.forEach((item)=> {
    item.addEventListener('click', ()=> {
      // console.log(item.innerHTML);


      // if (checkerSpace(item))return;

      // playerInput(item);



      

    });
     });



    //  const checkerSpace= (item)=>{

    //     if (item.innerHTML.charAt(30)!=" "){
    //         return true;
    //     } 
    //     return false;
    //  }

    //  const playerInput = (item)=>{
    //     if (playerTurn){ 
    //         item.innerHTML=`<span class="input-placement">O</span>`;
    //         playerTurn=false; 
    //         return;
    //       }
    //         playerTurn=true;
    //         item.innerHTML=`<span class="input-placement">X</span>`;
    //  }