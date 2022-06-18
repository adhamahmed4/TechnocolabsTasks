const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Please enter a valid choice');
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return 'rock';
    } else if(randomNumber === 1) {
        return 'paper';
    }
    return 'scissors';
};

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
        return 'It is a tie';
    } else if(userChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    } else if(userChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    } else if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'Computer wins';
        } else {
            return 'User wins';
        }
    }
    if(userChoice === 'bomb' && computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors') {
        return 'User wins';
    }
};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();