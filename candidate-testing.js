const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name:" );
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question);

console.log('Welcome to the Multiple Choice Test');
let multipleQuestions = true;

for (let i = 0; i < questions.length; i++) {
    
    let testAnswers = input.question(questions[i]);

    candidateAnswers.push(testAnswers);

    

    // if (firstWoman !== 'Sally Ride') {
    //     console.log("That is correct");
    //     firstWoman = false;
    // }

    // console.log('That is incorrect');
    
    // let trueOrFalse = input.question("True or false: 5 kilometer == 5000 meters? (true/false)");
    
    // if (trueOrFalse !== 'true') {
    //   console.log("That is correct");
    //   trueOrFalse = false;
    // }
    // console.log("That is incorrect");

    // const mathProblem = input.question('(5 + 3)/2 * 10 = ?');

    // if (mathProblem !== "40") {
    //   console.log("That is correct");
    //   mathProblem = false
    // }
    // console.log("That is incorrect");

    // "Given the array [8, 'Orbit', 'Trajectory', 45]";

    // let array = input.question('What entry is at index 2?');

    // for (let index = 0; index < array; index++) {

    //     for (let indexj = 0; indexj < array.length; indexj++){
    //         console.log(`${indexj + 1}: ${booksToBuy[indexj]}`);
    //     }
    //     let crewSize = input.question('What is the minimum crew size for the ISS?');
    //     booksBought.push(crewSize)
    // }

    // console.log(crewSize);
  }
console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let numberOfCorrectAnswers = 0;
  
  
  for (i = 0; i < questions.length; i++) 
  {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase())
  { 
    numberOfCorrectAnswers += 1
  }
  }

    let grade = ((numberOfCorrectAnswers / 5) * 100);  //TODO 3.2 use this variable to calculate the candidates score.
 numberOfCorrectAnswers = candidateAnswers
 {
  if (numberOfCorrectAnswers >= 80); {
    console.log("You passed!");
  }
}
  
return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
//runProgram()
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};