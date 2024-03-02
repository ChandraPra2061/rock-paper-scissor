let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user");
const computerScorePara=document.querySelector("#computer");

const genComputerChoice= () => {
    const options = ["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return options[random];
};

const drawGame=() => {
    msg.innerText="Game was draw";
    msg.style.backgroundColor="black";
    msg.style.color="white";
};

const showWinner=(userWin,userChoice,computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win. Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="Green";
        msg.style.color="white";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You Lose. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="white";
    }
};

const playGame=(userChoice) => {
    const computerChoice=genComputerChoice();

    if(userChoice===computerChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= computerChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
            userWin=computerChoice==="scissor" ? false : true;
        }
        else{
            userWin=computerChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});