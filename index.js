function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.toLowerCase();
  
    if (
      formattedPlayerSelection === 'rock' ||
      formattedPlayerSelection === 'paper' ||
      formattedPlayerSelection === 'scissors'
    ) {
      if (formattedPlayerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
      } else if (
        (formattedPlayerSelection === 'rock' && computerSelection === 'Scissors') ||
        (formattedPlayerSelection === 'paper' && computerSelection === 'Rock') ||
        (formattedPlayerSelection === 'scissors' && computerSelection === 'Paper')
      ) {
        return `You win! ${formattedPlayerSelection} beats ${computerSelection}`;
      } else {
        return `You lose! ${computerSelection} beats ${formattedPlayerSelection}`;
      }
    } else {
      return 'Invalid input! Please choose either Rock, Paper, or Scissors.';
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt('Enter your choice (Rock, Paper, or Scissors):');
      const computerSelection = getComputerChoice();
  
      console.log(`Round ${round}:`);
      console.log(`Player: ${playerSelection}`);
      console.log(`Computer: ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('win')) {
        playerScore++;
      } else if (result.includes('lose')) {
        computerScore++;
      }
    }
  
    console.log('Game over!');
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('You lost the game. Better luck next time!');
    } else {
      console.log("It's a tie! The game ended in a draw.");
    }
  }
  
  game();
  