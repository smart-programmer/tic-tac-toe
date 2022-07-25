const ryu = document.getElementById('ryu-attack')



const kenHealth = document.getElementById('health-number1')
let kenCurrentHealth =100
document.addEventListener('keydown', (event)=>{ // for Ryu
    if (event.key=='I'||event.key=='i') {
        ryu.innerHTML=`<img src='https://www.fightersgeneration.com/characters3/ryu-mp.gif' class="player-body ryu-body" />`

        kenHealth.innerHTML = (kenCurrentHealth-=5)
        setTimeout(()=>{
            ryu.innerHTML=`<img src='https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif' class="player-body ryu-body" />`
        },500)    
    }else if(event.key=='o'||event.key=='O'){
        ryu.innerHTML=`<img src='https://www.fightersgeneration.com/characters3/ryu-hk.gif' class="player-body ryu-body" />`
        kenHealth.innerHTML = (kenCurrentHealth-=10)
        setTimeout(()=>{
            ryu.innerHTML=`<img src='https://www.fightersgeneration.com/characters3/ryu-ts-stance.gif' class="player-body ryu-body" />`
        },800)    
    }
    winner();

    
})
const ryuHealth = document.getElementById('health-number2')
let ryuCurrentHealth =100
const ken = document.getElementById('ken-attack')
document.addEventListener('keydown', (event)=>{ // for Ken
    if (event.key=='w'||event.key=='W') {
        ken.innerHTML=`<img src='https://www.fightersgeneration.com/characters2/ken-air2.gif' class="player-body ken-body" />`
        ryuHealth.innerHTML = (ryuCurrentHealth-=5)
        setTimeout(()=>{
            ken.innerHTML=`<img src='https://www.fightersgeneration.com/characters2/ken-ts-stance.gif' class="player-body ken-body" />`
        },300)    
    }else if(event.key=='E'||event.key=='e'){
        ken.innerHTML=`<img src='https://www.fightersgeneration.com/characters2/ken-air5.gif' class="player-body ken-body" />`
        ryuHealth.innerHTML = (ryuCurrentHealth-=10)

        setTimeout(()=>{
            ken.innerHTML=`<img src='https://www.fightersgeneration.com/characters2/ken-ts-stance.gif' class="player-body ken-body" />`
        },300)    
    }
    
})


const  w = document.getElementById('flexbox-container')
const winner = () =>{
    console.log('weaw');
    if(ryuCurrentHealth<0){
        let h1= document.createElement('h1');
        h1.setAttribute('id','www');
        
        let result= document.createTextNode('winner is Ken -----> ')
        h1.appendChild(result);
        w.innerHTML= ''
        w.appendChild(h1)
        w.innerHTML+='<img src="https://www.fightersgeneration.com/news2022/char2/ken-streetfighter-animated-movie.gif">'


    }else if(kenCurrentHealth<0){
        let h1= document.createElement('h1');
        h1.setAttribute('id','www');


      

        let result= document.createTextNode('winner is Ryu ----->')
        h1.appendChild(result);
        w.innerHTML= ''
        w.appendChild(h1)
        w.innerHTML+='<img src="https://www.fightersgeneration.com/news2022/char2/ryu-fortnite-sax-dance.gif">'

    }
}

