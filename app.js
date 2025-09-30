let userseque = [];
let gameseque = []; 

let btns = ["yellow","purple","green","red"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");
let high = document.querySelector(".high");

document.addEventListener("keypress" , function () {
    if(started == false){
        started=true;
        levelUp();
    }

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    } , 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    } , 250);
}


function levelUp(){
    userseque=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    gameseque.push(randcolor);
    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
}

let highscore = 0;
function anscheck(indx){
        
    if(userseque[indx] === gameseque[indx]){
        if(userseque.length == gameseque.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over! Your score is ${level} <br/> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor = "white"; 
        },150)
          
        
        if(level > highscore){
            highscore = level;
            high.innerText = `Highscore ${highscore} `;
        }else{
             high.innerText = `Highscore ${highscore} `;
        }
  
        reset();
    }

}

function btnpress(){
    let btn =this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    userseque.push(usercolor);

    anscheck(userseque.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
  started = false;
  userseque=[];
  gameseque=[];
  level = 0;
  
}



