var wins = 0;
var losses = 0;
var count = 15;


var wordArray = ["bear", "beets", "dwight"]; 
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];

function Game() {

     //var that will randomly call words
    console.log (wordArray);
    console.log(randWord);
    
   
    var count = 15;
    var answerArray = []; //array to hold underscores and then answer
    var rightWord = [];
    var wrongWord = [];

    for (var i = 0; i < randWord.length; i++) {
        answerArray.push("_");
    }
                   
    document.addEventListener('keypress', (event) => {
        
        var input = String.fromCharCode(event.keyCode);
        console.log(input);
           
        console.log(answerArray);

    
    for (var j = 0; j < randWord.length; j++) {
        if (randWord[j] === input) {
            answerArray[j] = input;
                
            }
            
        }

        console.log(count);
        console.log(rightWord);
        console.log(wrongWord);
   
    
        if (count === 0) {
            losses++;
            
        }
        
        if (randWord === answerArray.join("")) {
            wins++;
            
        }

        for (var k = 0; k <randWord.length; k++) {
            if (randWord[k] != input) {
                wrongWord.push(input);
                break;
            }
            
            
            
        }
  
             document.getElementById("word").innerHTML = answerArray;
             document.getElementById("counter").innerHTML = count;
             document.getElementById("letters").innerHTML = wrongWord;
             document.getElementById("wins").innerHTML = wins;
             document.getElementById("losses").innerHTML = losses;
             document.getElementById("correct").innerHTML = rightWord;
             
        });
    }
        
    


            
/*
if (input != null) {
            count--;
            if (count < 1) {
                count = 15;
                document.reload = Game();
            }
            console.log(count);
        }

for (var i = 0; i < randWord.length; i ++) { //loop to generate underscores based on word length
            answerArray[i] = "_";
            if (answerArray.length = randWord.length) {
                break;
            }
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
    
        
    
    
        
    
            
    
    
            
            
            
            console.log(answerArray);
            
            console.log(wrongWord);
            
    
            
            
        
             document.getElementById("word").innerHTML = answerArray;
             document.getElementById("counter").innerHTML = count;
             document.getElementById("letters").innerHTML = wrongWord;
             
        });
    }



    
    */