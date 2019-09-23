var Word = require('./word.js');
var inquirer =require('inquirer');

var wordArr = ['Timponogos','Mt Olympus', 'Lone Peak', 'Ninety-Nine Ninety', 'Jupiter Peak', 'Clayton Peak', 'Kessler Peak','Grandeur Peak', 'Mt Superior']
var currentWord;
var currentWordString;

//Function selects a random word from wordArr, creates a new Word constructor object out of the word,
function newWord(){
    var rand = Math.floor(Math.random() * wordArr.length);
    currentWord = new Word(wordArr[rand]);
    currentWordString = wordArr[rand];

    // console.log('Current Word: '+ currentWord);
    console.log('Current Word String: '+ currentWordString);
    play();
}

//Primary game function. Checks array of placeholders vs the current word string, and keeps track of guess count to make sure that the user has not lost
function play() {
    if(currentWord.returnWord() != currentWordString.toLowerCase() && currentWord.guesses > 0) {
        console.log(currentWord.returnWord());
        console.log("Guesses Remaining: " + currentWord.guesses);
       
        //Begin inquirer prompt to allow user to guess letter
        inquirer.prompt([
            {
                name: "letter",
                message: "Guess a letter"
            }
            
            //Recursive function that will deduct one from the guess cound each time the function is run. 
        ]).then(function(answers){
            currentWord.guess(answers.letter);
            play();
        })
    }else{
        endGame();
    }
}

//Function catches scenarios where the user will win or lose and inform them of their game status
function endGame(){
    if(currentWord.guesses > 0){
        console.log('You guessed the word! You Win!!');
    }else{
        console.log("No more guesses. Try Again");
    }
    
    //Remove used word from array
    wordArr.splice(words.indexOf(currentWordString),1);
    
    //If all words are used and array is empty, reset array to default.
    var wordArr = ['Timponogos','Mt Olympus', 'Lone Peak', 'Ninety-Nine Ninety', 'Jupiter Peak', 'Clayton Peak', 'Kessler Peak','Grandeur Peak', 'Mt Superior']
    
    //Run newWord to restart game
    newWord();
}
newWord();