var wins = 0;
var losses = 0;
var count = 15;
    var answerArray = []; //array to hold underscores and then answer
    var rightWord = [];
    var wrongWord = [];





var wordArray = ["riddikulus", "obliviate", "sectumsempra", "avada kedavra", "alohomora", "lumos", "expelliarmus", "wingardium leviosa", "accio", "expecto patronum"]; 
var randWord = wordArray[Math.floor(Math.random() * wordArray.length)];

function Game() {

     //var that will randomly call words
    console.log (wordArray);
    console.log(randWord);
    
   
    


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

        if (count === 0) {
            losses++;
            count = 15;
            rightWord.push(randWord);
            answerArray = []; 
            
            wrongWord = [];
            randWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            for (var i = 0; i < randWord.length; i++) {
                answerArray.push("_");
            }
            
            
        }

        console.log(count);
        console.log(rightWord);
        console.log(wrongWord);
   
    
        
        
        if (randWord === answerArray.join("")) {
            wins++;
            count = 15;
            
            rightWord = randWord;
            
            
            answerArray = []; 
            wrongWord = [];
            randWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            for (var i = 0; i < randWord.length; i++) {
                answerArray.push("_");
            }
            
            
            
        }

        for (var k = 0; k <randWord.length; k++) {
            if (randWord[k] != input) {
                wrongWord.push(input);
                count--;
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
        
    


            
