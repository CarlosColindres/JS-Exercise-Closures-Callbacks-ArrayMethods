// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is being saved in a variable, count1 has the count inside the function and count 2 has it on a global level.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 because count is being passed down to another function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 counter1 to keep track of multiple counts. counter2 when you need a global count
 *
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){  
   return Math.floor(Math.random() * 3);
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


function finalScore(inning,num){
  let score = {
    home:0,
    away:0
  }
  console.log(inning())
  for(let i = 1; i<= num; i++) {
    let j = inning();
    score.away += j;
  }
  
  for(let i = 1; i<= num; i++) {
     let j = inning();
     score.home += j;
  }
  return score;
  
}


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(score1,score2) {
  let score = {
    home:score1,
    away:score2
  }
  return score;
}


function scoreboard(getInningScore,inning,num) {
  let score = {
    home:0,
    away:0
  }

  for (let i = 1; i<= num; i++) {
    let j = inning();
    score.away += j;
    let a = inning();
    score.home += a;
    console.log(getInningScore(score.home,score.away))
   }
   return score;
}

scoreboard(getInningScore,inning,5);


