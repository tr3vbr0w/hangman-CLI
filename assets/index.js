var Word = require('./word.js');
var inquirer =require('inquirer');

var wordArr = ['Timponogos','Mt Olympus', 'Lone Peak', 'Ninety-Nine Ninety', 'Jupiter Peak', 'Clayton Peak', 'Kessler Peak','Grandeur Peak', 'Mt Superior']
var currentWord = [];
var currentWordString = "";

//Function selects a random word from wordArr, creates a new Word constructor object out of the word,
function newWord(){
    var rand = Math.floor(Math.random() * wordArr.length);
    currentWord = new Word(wordArr[rand]);
    currentWordString = wordArr[rand];

    // console.log('Current Word: '+ currentWord);
    console.log('Current Word String: '+currentWordString);
    
    

}
newWord();
function play() {
    if(currentWord.returnWord() != currentWordString.toLowerCase() && currentWord.chances > 0) {
        console.log(currentWord.returnWord());
        console.log("Guesses Remaining: " + currentWord.chances)
    }
}