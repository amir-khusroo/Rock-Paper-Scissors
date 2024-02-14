let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const CompScorePara = document.querySelector("#compScore");

const genCompChoice=()=>{
    let option=["rock","paper","scissors"];
    return option[Math.floor(Math.random()*3)];
}

const checkWin=(isUserWin, userChoice, compChoice)=>{
    if(isUserWin===true){
        msg.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        msg.innerText=`You Lose. ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red"
        compScore++;
        CompScorePara.innerText = compScore;
    }
}

const playGame=(userChoice)=>{
    //user Choice

    //computer choice
    let compChoice =genCompChoice();

    if(userChoice===compChoice){
        msg.innerText="Game was Draw. Play again";
        msg.style.backgroundColor="black";
    }
    else{
        let isUserWin=true;
        if(userChoice==="rock"){
            isUserWin=compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            isUserWin=compChoice==="scissors"? false : true;
        }
        else{
            isUserWin = compChoice==="rock"? false : true;
        }
        checkWin(isUserWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let choiceId=choice.getAttribute("id");
        playGame(choiceId);
    })
})