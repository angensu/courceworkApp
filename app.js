const game = () => {
  let pScore = 0;
  let cScore = 0;

  // старт
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn'); 
    });
  };

  // один ход

  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand =>{
      hand.addEventListener('animationend',function(){
        this.style.animation = '';
      });
    });
    // рандомная генерация выбора компьютера

    const compOptions = ['rock', 'scissors', 'paper'];

    options.forEach(option => {
      option.addEventListener('click', function(){
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoise = compOptions[computerNumber];

        setTimeout(()=>{
          compareHands(this.textContent, computerChoise);
          //смена картинок
  
          playerHand.src =`./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoise}.png`;
        },1500);

        playerHand.style.animation = "shakePlayer 1.5s ease";
        computerHand.style.animation = "shakeComputer 1.5s ease";
      });
    }); 
  };

  const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  }

  const compareHands =(playerChoice, computerChoise) =>{

    const winner = document.querySelector('.winner');
    //проверка на ничью
    if(playerChoice === computerChoise){
      winner.textContent = 'It is a tie';
      return;
    }

    // проверка на камень
    if(playerChoice ==='rock'){
      if(computerChoise === 'scissors'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    // проверка на ножницы
    if(playerChoice ==='scissors'){
      if(computerChoise === 'paper'){
        winner.textContent = 'Player wins ';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
    // проверка на бумагу
    if(playerChoice ==='paper'){
      if(computerChoise === 'rock'){
        winner.textContent = 'Player wins';
        pScore++;
        updateScore();
        return;
      }else{
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();





