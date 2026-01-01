let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const uscore = document.querySelector("#uscore");
const cscore = document.querySelector("#cscore");

const genCompChoice = () => {
  const choice = ["rock" , "paper" , "scissors"];
  const idx = Math.floor(Math.random() * 3);
  return choice[idx];

};

const drawGame = () =>
{
  console.log("Game Was Draw ...Play Again!!");
  msg.innerText = "Game Was Draw";
   msg.style.backgroundColor = "#081b31";
  return;
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin)
    {
      console.log("You Won!");
      msg.innerText = `Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "#1f7a4d";
      userScore++;
      uscore.innerText = userScore;
    }
    else 
      {
      console.log("You lose!");
      msg.innerText = `${compChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "#8b1e1e";
      compScore++;
      cscore.innerText = compScore;
      
    } 
}


const playGame = (userChoice) =>{
  console.log("Choice was clicked ", userChoice);
  //comp choice
  const compChoice = genCompChoice();
   let userWin = true;

  if(userChoice === compChoice)
  {
    drawGame();
    return;
  }else
  {
   
    if(userChoice === "rock")
    {
     userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper")
    {
      userWin = compChoice === "scissors" ? false : true;
    }
    else
    {
      userWin = compChoice === "rock" ? false : true;
    }
  }

  showWinner(userWin , userChoice, compChoice);
  
  
}

choices.forEach((choice) =>  {
   choice.addEventListener("click" , () =>
  {
    const userChoice = choice.getAttribute("id");
    
    playGame(userChoice);
  });
 
});