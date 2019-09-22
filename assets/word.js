// Require constructor from letter.js
var letter = require('./letter.js');

var wordArr = ['Timponogos','Mt Olympus', 'Lone Peak', 'Ninety-Nine Ninety', 'Jupiter Peak', 'Clayton Peak', 'Kessler Peak','Grandeur Peak', 'Mt Superior']

//Initialize Word constructor

var Word = function(wordArr) {
    this.wordArr = newWord.split("");
    this.letterArr = [];
    this.guesses = 12;
    //This segment of the constructor sets letterArr to break up the selected word into an array of letters, displaying either the guessed letter or the placeholder
    for (let i = 0; i < wordArr.length; i++) {
        var newLetter = new Letter(this.wordArr[i]);
        this.letterArr.push(newLetter);
    }
    //This segment of the constructor sets 
    this.returnWord = function(){
        var word;
        for (let i = 0; i < letterArr.length; i++) {
            word += this.letterArr[i].returnLetter();
        }
        return word;
    }
    // Function checks guess against each letter in letterArr
    this.guess = function(input){
        var correct = false;
        for (let i = 0; i < this.letterArr.length; i++) {
            if(!this.letterArr[i].solved){
                this.letterArr[i].guess(input);
                if(this.letterArr[i].solved){
                    correct = true;
                }
            }
            
        }
        if (correct === true){
            console.log('Correct!!\n');
        }else {
            console.log('Incorrect, Try Again!');
            this.guesses--;          
        }
    }
}
module.exports = Word;
