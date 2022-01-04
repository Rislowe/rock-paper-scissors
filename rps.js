//Global variables that allow me to count wins and output the correct end result.
let playerWin = 0, compWin = 0;

//computer play function. outputs one of the 3 options at random

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

//game function plays the game five times, but also gets player input

let game = ()=>
{
    for (let i = 0; i < 5; i++)
    {
        console.log("/******** Game "+ (i+1) + " of 5********/");
        console.log("\n\nWhatchya throwin'?");
        let selection = prompt();

        console.log(playRound(computerPlay(), selection));
    }

    console.log("\n\nResults:\nPlayer: "+playerWin+" vs. Computer: " +compWin);

    if(playerWin > compWin)
    {
        console.log("The Player Wins!");
    }

    if(compWin>playerWin)
    {
        console.log("The Computer Wins!");
    }

    if(compWin == playerWin)
    {
        console.log("It's a Draw!");
    }

    return "\n\nThat's all folks!!"
}

console.log(game());