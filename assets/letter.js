//Letter constructor, takes in the user input, exports information from this file to word.js
var Letter = function(newLetter) {
    //Sets the answer to the paramater passed into the function, sets default boolean of this instance of letter to false
    this.answer = newLetter.toLowerCase();
    this.exists = false;

    //Function that returns letter if it has a place in the word, otherwise returns "_"
    this.returnLetter = function() {
        if(this.exists === true){
            return this.answer;
        } else {
            return "_ ";
        }
    }
    //This function takes input from inquirer, changes it to lowercase, and checks the value against the answer within the letter constructor. If the answer exists within the word, this.guessed is changed to true
    this.guess = function(input) {
        if (input.toLowerCase() === this.answer){
            this.solved = true;
        };
    };
};

module.exports = Letter;