//Global variables that allow me to count wins and output the correct end result.
let playerWin = 0, compWin = 0;
const WINSTATE = 5;

//computer play function. outputs one of the 3 options at random
let compThrow = document.querySelector('.computer_throw');

let computerPlay = ()=>
{
    let num = Math.floor(Math.random()*10)%3;

    let selected;

    if(num == 0)
    {
        selected = "rock";
    }
    else if(num == 1)
    {
        selected = "paper";
    }
    else
    {
        selected = "scissors";
    }

    compThrow.innerHTML = selected;

    return selected;
}

let playRound = (compSelection, playerSelection)=>
{
    let state;
    let toggle;
    let selected = playerSelection.toLowerCase();

    switch (selected)
    {
        case "rock":
            if (compSelection == "paper")
            {
                toggle = 1;
            }
            else if (compSelection == "scissors")
            {
                toggle = 2;
            }
            else
            {
                toggle = 3;
            }
            break;

        case "paper":
            if (compSelection == "scissors")
            {
                toggle = 1;
            }
            else if (compSelection == "rock")
            {
                toggle = 2;
            }
            else
            {
                toggle = 3;
            }
            break;
        
        case "scissors":
            if (compSelection == "rock")
            {
                toggle = 1;
            }
            else if (compSelection == "paper")
            {
                toggle = 2;
            }
            else
            {
                toggle = 3;
            }
            break;
        
        default:
            return "Now you're just cheating."
    }

    if(toggle == 1)
    {
        state = "You Lose! " + compSelection + " beats " + selected;
        compWin += 1;
    }
    else if (toggle == 2)
    {
        state = "You Win! " + selected + " beats " + compSelection;
        playerWin += 1;   
    }
    else
    {
        state = "It's a Draw! You both picked " + selected;
    }
    return state;
}

//create buttons
const rock_button = document.querySelector('#rock_button');
const paper_button = document.querySelector('#paper_button');
const scissors_button = document.querySelector('#scissors_button');

//updates the results div
let results_div = document.querySelector('.results');

//updates score cards
let player_score = document.querySelector('.score_text_player');
let computer_score = document.querySelector('.score_text_computer');

let playerThrow = document.querySelector('.player_throw');

rock_button.addEventListener('click', () =>
{
    playerThrow.innerHTML = "rock";
    let gameState = playRound(computerPlay(), "rock");
    results_div.innerHTML = gameState;
    checkGame();
});

paper_button.addEventListener('click', () =>
{
    playerThrow.innerHTML = "paper";
    let gameState = playRound(computerPlay(), "paper");
    results_div.innerHTML = gameState;
    checkGame();
});

scissors_button.addEventListener('click', () =>
{
    playerThrow.innerHTML = "scissors";
    let gameState = playRound(computerPlay(), "scissors");
    results_div.innerHTML = gameState;
    checkGame();
});

const reset_button = document.querySelector('#reset_button');
reset_button.setAttribute('disabled', 'true');

reset_button.addEventListener('click', () =>
{
    playerWin = 0;
    compWin = 0;

    rock_button.classList.toggle('disabled');
    rock_button.removeAttribute('disabled');

    paper_button.classList.toggle('disabled');
    paper_button.removeAttribute('disabled');

    scissors_button.classList.toggle('disabled');
    scissors_button.removeAttribute('disabled');

    reset_button.classList.toggle('disabled');
    reset_button.setAttribute('disabled', 'true');

    player_score.innerHTML = "";
    computer_score.innerHTML = "";
    results_div.innerHTML = "";

    playerThrow.innerHTML = "";
    compThrow.innerHTML = "";
})

//Updates the scoreboard and if either player or computer hit 5 wins, buttons are disabled.

let checkGame = ()=>
{
    player_score.innerHTML = playerWin;
    computer_score.innerHTML = compWin;

    if(playerWin == WINSTATE || compWin == WINSTATE)
    {
        rock_button.classList.toggle('disabled');
        rock_button.setAttribute('disabled', 'true');

        paper_button.classList.toggle('disabled');
        paper_button.setAttribute('disabled', 'true');

        scissors_button.classList.toggle('disabled');
        scissors_button.setAttribute('disabled', 'true');

        reset_button.classList.toggle('disabled');
        reset_button.removeAttribute('disabled');
    }

    if(playerWin == WINSTATE)
    {
        results_div.innerHTML = "The Player Wins!";
    }

    if(compWin==WINSTATE)
    {
        results_div.innerHTML = "The Computer Wins!";
    }
}