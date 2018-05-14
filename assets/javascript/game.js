function Game() {
var wordArray = ["bear", "beets", "dwight"]; //array containing words
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)]; //var that will randomly call words
console.log (wordArray);
console.log(randWord);


var count = 0;
var answerArray = []; //array to hold underscores and then answer
var wrongWord = [];
var rightWord = [];



           
document.addEventListener('keypress', (event) => {
   
    var input = String.fromCharCode(event.keyCode);
    console.log(input);
    
    if (input != null) {
        count++;
        if (count > 14) {
            alert("Game Over!");
            count = 0;
            document.onload = Game();
        }
        console.log(count);
    }

    
   


    for (var i = 0; i < randWord.length; i ++) { //loop to generate underscores based on word length
        answerArray[i] = "_";
        break;
        }
 

    for (var j = 0; j < randWord.length; j++) {
        if (randWord[j] === input) {
            answerArray[j] = input;
            
            }
        
        
        }
    
    for (var k = 0; k <randWord.length; k++) {
        if (randWord[k] != input) {
            wrongWord.push(input);
            break;
            
        }
        
    }

    //if (randWord.length === rightWord.length) {    }

    

        


        
        
        console.log(rightWord);
        console.log(answerArray);
        
        console.log(wrongWord);
        

        
        
    
         document.getElementById("word").innerHTML = answerArray;
         document.getElementById("counter").innerHTML = count;
         document.getElementById("letters").innerHTML = wrongWord;
         document.getElementById("correct").innerHTML = rightWord;
    });
}
    /*function newWord() {
        var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        count = 0;
        }
      */      

        
            
    
    


            




    
    