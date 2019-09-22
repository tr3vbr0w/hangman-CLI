var Word = require('./word.js');
var inquirer =require('inquirer');

var wordArr = ['Timponogos','Mt Olympus', 'Lone Peak', 'Ninety-Nine Ninety', 'Jupiter Peak', 'Clayton Peak', 'Kessler Peak','Grandeur Peak', 'Mt Superior']
var currentWord = [];
var currentWordString = "";


function newWord(){
    var rand = Math.floor(Math.random() * wordArr.length);
    currentWord = new Word(wordArr[rand]);
    currentWordString = wordArr[rand];

    console.log(currentWord);
    console.log(currentWordString);
    

}
newWord();