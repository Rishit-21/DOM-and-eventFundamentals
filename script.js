'use strict';

let seceretNumber =Math.trunc(Math.random()*20+1);
let score = 20
let highScore=0;

const displayMessage = function (message){
      document.querySelector('.message').textContent=message;
    //return msg;
};

document.querySelector('.check').addEventListener('click',function(){
    var guess= Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No number!');
    }
    else if(guess===seceretNumber){
        displayMessage('YEEEEEE CORRECT NUMBER 🕺!');
        document.querySelector('.number').textContent=seceretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='6em'

         document.querySelector('.highscore').textContent= score

    }
    else if(guess!==seceretNumber){
        if(score>1){
           displayMessage(guess > seceretNumber?'tooo highhhhh':"tooooo lowwww ");
            score--;
            document.querySelector('.score').textContent=score;
        }
    }

    // lost game
    else{
        displayMessage('BYE BYE YOU LOST');
    }
})
// for reset the game
document.querySelector('.again').addEventListener('click',function(){
    //score=20;
    seceretNumber =Math.trunc(Math.random()*20+1);
    //highScore= document.querySelector('.highscore').textContent= highScore
    
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.score').textContent='20';
    displayMessage('Start Gusseing....');
    document.querySelector('.guess').value= '';
    document.querySelector('.number').textContent='?';
    var guess= Number(document.querySelector('.guess').value);

    if(score>highScore){
        highScore=score;
        document.querySelector('.highscore').textContent=highScore
    }

})
 