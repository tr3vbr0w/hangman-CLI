// Require constructor from letter.js
var Letter = require('./letter.js');


//Initialize Word constructor

var Word = function(newWord) {
    this.wordArr = newWord.split("");
    this.letterArr = [];
    this.guesses = 5;
    //This segment of the constructor sets letterArr to break up the selected word into an array of letters, displaying either the guessed letter or the placeholder
    for (let i = 0; i < this.wordArr.length; i++) {
        var newLetter = new Letter(this.wordArr[i]);
        this.letterArr.push(newLetter);
    }
    //This segment of the constructor sets the variable word to be an empty string, then adds a new 
    this.returnWord = function(){
        var word = "";

        for (let i = 0; i < this.letterArr.length; i++) {
            word += this.letterArr[i].returnLetter();
        }
        return word;
    }
    // Function checks guess against each letter in letterArr
    this.guess = function(input){
        var correct = false;
        for (var i = 0; i < this.letterArr.length; i++) {
			if (!this.letterArr[i].exists) {
				this.letterArr[i].guess(input);
				if (this.letterArr[i].exists) {
					correct = true;
				}
            }
        }
        console.log(this.guesses)

        if (correct){
            console.log('Correct!!\n');
        }else {
            console.log('Incorrect, Try Again!');
            this.guesses = this.guesses - 1;        
        }
    }
}
module.exports = Word;
