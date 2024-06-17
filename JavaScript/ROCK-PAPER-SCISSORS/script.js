let userScore=0;
let compScore=0;
let userWin=true;
let msg = document.querySelector("#msg");
const choices =document.querySelectorAll(".choice");

let usc = document.querySelector("#user-score");
let csc = document.querySelector("#comp-score");
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
const cid = choice.getAttribute("id");
  
    playGame(cid);
  })
});

const playGame = (userChoice)=>{
  console.log('user choice =',userChoice);
  
  const compChoice = genCompChoice();
  console.log('comp choice =',compChoice);
  
  if(compChoice==userChoice){
    msg.innerText = "draw"
    msg.style.background="#3B3C40"
    console.log("draw");
  }
  else{
    
    if(userChoice==="rock"){
    userWin= compChoice === "paper"?false:true;
    }
    
    else if(userChoice==="paper"){
      userWin= compChoice==="scissors"?false:true;
    }
    
    else if(userChoice ==="scissors"){
      userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
  }
  
}

const genCompChoice =()=>{
  const options =["rock","paper","scissors"];
  return options[Math.floor(Math.random()*3)];
}

const draw = ()=>{
  msg.innerText ="draw"
}

const showWinner =(userWin)=>{
  if(userWin){
    msg.innerText = "you won"
    msg.style.background ="green";
    userScore++;
    usc.innerText = userScore;
  }
  else{
    msg.innerText ="comp won"
    msg.style.background="red";
    compScore++;
    csc.innerText = compScore;
    
  }
}