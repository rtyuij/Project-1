const NOTES = {
  "C": 'samples/C4.wav', 
  "C# / Db": 'samples/Cs4.wav',
  "D": 'samples/D4.wav',
  "D# / Eb": 'samples/Ds4.wav',
  "E": 'samples/E4.wav',
  "F": 'samples/F4.wav',
  "F# / Gb": 'samples/Fs4.wav',
  "G": 'samples/G4.wav',
  "G# / Ab": 'samples/Gs4.wav',
  "A": 'samples/A4.wav',
  "A# / Bb": 'samples/As4.wav',
  "B": 'samples/B4.wav',
  "C2": 'samples/C5.wav', 
  "C# / Db2": 'samples/Cs5.wav',
  "D2": 'samples/D5.wav',
  "D# / Eb2": 'samples/Ds5.wav',
  "E2": 'samples/E5.wav',
  "F2": 'samples/F5.wav',
  "F# / Gb2": 'samples/Fs5.wav',
  "G2": 'samples/G5.wav',
  "G# / Ab2": 'samples/Gs5.wav',
  "A2": 'samples/A5.wav',
  "A# / Bb2": 'samples/As5.wav',
  "B2": 'samples/B5.wav',
}

const notesList = [
  'C',
  'C# / Db',
  'D',
  'D# / Eb',
  'E',
  'F',
  'F# / Gb',
  'G',
  'G# / Ab',
  'A',
  'A# / Bb',
  'B',
]

const notesLevel2Class = {
  'C': "level2tempC",
  'C# / Db': "level2tempCs",
  'D': "level2tempD",
  'D# / Eb': "level2tempDs",
  'E': "level2tempE",
  'F': "level2tempF",
  'F# / Gb': "level2tempFs",
  'G': "level2tempG",
  'G# / Ab': "level2tempGs",
  'A': "level2tempA",
  'A# / Bb': "level2tempAs",
  'B': "level2tempB"
}

let score = 0;
let attempts = 0;
let scorePercent = 0;
let level2Counter = 0; 
let level2FirstKey = ""; //Remembers the previous note click for Level 2
let target = null;

let attemptsObject = {
  'C': 0,
  'C# / Db': 0,
  'D': 0,
  'D# / Eb': 0,
  'E': 0,
  'F': 0,
  'F# / Gb': 0,
  'G': 0,
  'G# / Ab': 0,
  'A': 0,
  'A# / Bb': 0,
  'B': 0
}

let scoreObject = {
  'C': 0,
  'C# / Db': 0,
  'D': 0,
  'D# / Eb': 0,
  'E': 0,
  'F': 0,
  'F# / Gb': 0,
  'G': 0,
  'G# / Ab': 0,
  'A': 0,
  'A# / Bb': 0,
  'B': 0
}

newTarget()

if (((sessionStorage.getItem("score")) !== "NaN") && ((sessionStorage.getItem("score")) !== null)) {
  retrieveScore();
  repopulateObjects();
} else {
  attemptsObject = {
    'C': 0,
    'C# / Db': 0,
    'D': 0,
    'D# / Eb': 0,
    'E': 0,
    'F': 0,
    'F# / Gb': 0,
    'G': 0,
    'G# / Ab': 0,
    'A': 0,
    'A# / Bb': 0,
    'B': 0
  }
  
  scoreObject = {
    'C': 0,
    'C# / Db': 0,
    'D': 0,
    'D# / Eb': 0,
    'E': 0,
    'F': 0,
    'F# / Gb': 0,
    'G': 0,
    'G# / Ab': 0,
    'A': 0,
    'A# / Bb': 0,
    'B': 0
  }
}

function repopulateObjects() {

  var repopS1 = sessionStorage.getItem("sC");
  var repopS2 = sessionStorage.getItem("sCs");
  var repopS3 = sessionStorage.getItem("sD");
  var repopS4 = sessionStorage.getItem("sDs");
  var repopS5 = sessionStorage.getItem("sE");
  var repopS6 = sessionStorage.getItem("sF");
  var repopS7 = sessionStorage.getItem("sFs");
  var repopS8 = sessionStorage.getItem("sG");
  var repopS9 = sessionStorage.getItem("sGs");
  var repopS10 = sessionStorage.getItem("sA");
  var repopS11 = sessionStorage.getItem("sAs");
  var repopS12 = sessionStorage.getItem("sB");
 
  var repopA1 = sessionStorage.getItem("aC");
  var repopA2 = sessionStorage.getItem("aCs");
  var repopA3 = sessionStorage.getItem("aD");
  var repopA4 = sessionStorage.getItem("aDs");
  var repopA5 = sessionStorage.getItem("aE");
  var repopA6 = sessionStorage.getItem("aF");
  var repopA7 = sessionStorage.getItem("aFs");
  var repopA8 = sessionStorage.getItem("aG");
  var repopA9 = sessionStorage.getItem("aGs");
  var repopA10 = sessionStorage.getItem("aA");
  var repopA11 = sessionStorage.getItem("aAs");
  var repopA12 = sessionStorage.getItem("aB");

    scoreObject = {
      'C': parseInt(repopS1),
      'C# / Db': parseInt(repopS2),
      'D': parseInt(repopS3),
      'D# / Eb': parseInt(repopS4),
      'E': parseInt(repopS5),
      'F': parseInt(repopS6),
      'F# / Gb': parseInt(repopS7),
      'G': parseInt(repopS8),
      'G# / Ab': parseInt(repopS9),
      'A': parseInt(repopS10),
      'A# / Bb': parseInt(repopS11),
      'B': parseInt(repopS12)
    }
  
    attemptsObject = {
      'C': parseInt(repopA1),
      'C# / Db': parseInt(repopA2),
      'D': parseInt(repopA3),
      'D# / Eb': parseInt(repopA4),
      'E': parseInt(repopA5),
      'F': parseInt(repopA6),
      'F# / Gb': parseInt(repopA7),
      'G': parseInt(repopA8),
      'G# / Ab': parseInt(repopA9),
      'A': parseInt(repopA10),
      'A# / Bb': parseInt(repopA11),
      'B': parseInt(repopA12)
    }
  }

function newTarget() {
  target = notesList[generateRandomInt(notesList.length)]
  if (document.getElementById("Level 1").checked) {
    document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k &nbsp;&nbsp;&nbsp;t&nbsp;h&nbsp;i&nbsp;s&nbsp;&nbsp;&nbsp; k&nbsp;e&nbsp;y&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
    const targetHTML = document.querySelector("#target")
    targetHTML.innerHTML = target
  } else if (document.getElementById("Level 2").checked) {
      document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k&nbsp;&nbsp;&nbsp;a&nbsp;l&nbsp;l&nbsp;&nbsp;&nbsp;k&nbsp;e&nbsp;y&nbsp;s&nbsp;&nbsp;&nbsp;n&nbsp;a&nbsp;m&nbsp;e&nbsp;d&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
      level2FirstKey = "";
      const targetHTML = document.querySelector("#target")
      targetHTML.innerHTML = target
  }
}


function clearScore() { //Re-render the score
  score = 0;
  attempts = 0;
  scorePercent = 0;

  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  const scorePercentHTML = document.querySelector("#scorePercentage")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;
  scorePercentHTML.innerHTML = scorePercent;
  target = null; //This is how you reset the target

  newTarget()
}


function changeQuizQ() {
  if (document.getElementById("Level 1").checked){
      document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k &nbsp;&nbsp;&nbsp;t&nbsp;h&nbsp;i&nbsp;s&nbsp;&nbsp;&nbsp; k&nbsp;e&nbsp;y&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
      newTarget();

  } else if (document.getElementById("Level 2").checked){
      document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k&nbsp;&nbsp;&nbsp;a&nbsp;l&nbsp;l&nbsp;&nbsp;&nbsp;k&nbsp;e&nbsp;y&nbsp;s&nbsp;&nbsp;&nbsp;n&nbsp;a&nbsp;m&nbsp;e&nbsp;d&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
      level2FirstKey = "";
      const targetHTML = document.querySelector("#target")
      targetHTML.innerHTML = target

  }
}


function registerAttempt(note) {
  attempts++;
  if(note === target || note === (target + "2")) {
    score++;
    detailedResultsTabulatorScore(note);
  }
  if (document.getElementById("Level 2").checked){
    level2ClassRemover(level2FirstKey);
    level2ClassRemover(note);
  }
  //Re-render the score
  level2Counter = 0;
  scorePercent = Math.floor(score/attempts*100)
  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  const scorePercentHTML = document.querySelector("#scorePercentage")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;
  scorePercentHTML.innerHTML = scorePercent;

  target = null; //This is how you reset the target

  newTarget()
}

function level2FirstTry(note) {
  if(note === target || note === (target + "2")) {
    return;
  }
  else {
    level2ClassRemover(note);
    attempts++;
    detailedResultsTabulatorAttempts(note)
    target = null;
    target = notesList[generateRandomInt(notesList.length)];
    const targetHTML = document.querySelector("#target");
    targetHTML.innerHTML = target;
    const attemptsHTML = document.querySelector("#attempts")
    attemptsHTML.innerHTML = attempts;
    level2Counter = 0;
  }
}

function generateRandomInt(max){
  return Math.floor(Math.random() * max)
}

function clickNote(note) {
  playNote(note);
  if((target) && (document.getElementById("Level 1").checked)) {
    detailedResultsTabulatorAttempts(note)
    registerAttempt(note)
  }
  else if((target) && (document.getElementById("Level 2").checked) && (level2Counter===0)) {
    level2Counter++;
    level2ClassAdder(note)
    level2FirstKey = note;
    level2FirstTry(note)
  }
  else if((target) && (document.getElementById("Level 2").checked) && (level2Counter===1)) {
    if(note === level2FirstKey) {
      document.getElementById("quizQuestion").innerHTML = "Not that " + target + " again, the other " + target + "!";
      return;
    }
    else{
    detailedResultsTabulatorAttempts(note)
    registerAttempt(note)
    }
  }
}

function level2ClassAdder(note) {
  if (note.includes("2")) {
    const remove2 = note.slice(0, -1); 
    const level2noteClass = notesLevel2Class[remove2];
    document.getElementById(note).classList.add(level2noteClass);
  }
  else {
    const level2noteClass = notesLevel2Class[note];
    document.getElementById(note).classList.add(level2noteClass);
  }
}

  function level2ClassRemover(note) {
    if (note.includes("2")) {
      const remove2 = note.slice(0, -1); 
      const level2noteClass = notesLevel2Class[remove2];
      document.getElementById(note).classList.remove(level2noteClass);
    }
    else {
      const level2noteClass = notesLevel2Class[note];
      document.getElementById(note).classList.remove(level2noteClass);
    }
}

function detailedResultsTabulatorScore(note) {
  if (note.includes("2")) {
    const remove2 = note.slice(0, -1); 
    scoreObject[remove2]++
  }
  else {
    scoreObject[note]++
  }
}

function detailedResultsTabulatorAttempts(note) {
  if (note.includes("2")) {
    const remove2 = note.slice(0, -1); 
    attemptsObject[remove2]++
  }
  else {
    attemptsObject[note]++
  }
}

function playNote(note){
  const path = NOTES[note]
  var audio = new Audio(path);
  audio.play();
}

function dumpResultsToStorage() {
  sessionStorage.setItem("score",score);
  sessionStorage.setItem("attempts",attempts);
  sessionStorage.setItem("scorePercent", scorePercent);
  sessionStorage.setItem("sC",scoreObject["C"]);
  sessionStorage.setItem("sCs",scoreObject["C# / Db"]);
  sessionStorage.setItem("sD",scoreObject["D"]);
  sessionStorage.setItem("sDs",scoreObject["D# / Eb"]);
  sessionStorage.setItem("sE",scoreObject["E"]);
  sessionStorage.setItem("sF",scoreObject["F"]);
  sessionStorage.setItem("sFs",scoreObject["F# / Gb"]);
  sessionStorage.setItem("sG",scoreObject["G"]);
  sessionStorage.setItem("sGs",scoreObject["G# / Ab"]);
  sessionStorage.setItem("sA",scoreObject["A"]);
  sessionStorage.setItem("sAs",scoreObject["A# / Bb"]);
  sessionStorage.setItem("sB",scoreObject["B"]);
  sessionStorage.setItem("aC",attemptsObject["C"]);
  sessionStorage.setItem("aCs",attemptsObject["C# / Db"]);
  sessionStorage.setItem("aD",attemptsObject["D"]);
  sessionStorage.setItem("aDs",attemptsObject["D# / Eb"]);
  sessionStorage.setItem("aE",attemptsObject["E"]);
  sessionStorage.setItem("aF",attemptsObject["F"]);
  sessionStorage.setItem("aFs",attemptsObject["F# / Gb"]);
  sessionStorage.setItem("aG",attemptsObject["G"]);
  sessionStorage.setItem("aGs",attemptsObject["G# / Ab"]);
  sessionStorage.setItem("aA",attemptsObject["A"]);
  sessionStorage.setItem("aAs",attemptsObject["A# / Bb"]);
  sessionStorage.setItem("aB",attemptsObject["B"]);
}

function retrieveScore() {
  var scoreRetrieve = sessionStorage.getItem("score")
  score = parseInt(scoreRetrieve);

  var attemptsRetrieve = sessionStorage.getItem("attempts")
  attempts = parseInt(attemptsRetrieve);

  var scorePercentRetrieve = sessionStorage.getItem("scorePercent")
  scorePercent = parseInt(scorePercentRetrieve);

  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  const scorePercentHTML = document.querySelector("#scorePercentage")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;
  scorePercentHTML.innerHTML = scorePercent;
}

function displayDetailedResults() {
  var display1 = document.querySelector("#C_score");
  var scoreHTML1 = sessionStorage.getItem("sC");
  display1.innerHTML = scoreHTML1;

  var display2 = document.querySelector("#Cs_score");
  var scoreHTML2 = sessionStorage.getItem("sCs");
  display2.innerHTML = scoreHTML2;

  var display3 = document.querySelector("#D_score");
  var scoreHTML3 = sessionStorage.getItem("sD");
  display3.innerHTML = scoreHTML3;

  var display4 = document.querySelector("#Ds_score");
  var scoreHTML4 = sessionStorage.getItem("sDs");
  display4.innerHTML = scoreHTML4;

  var display5 = document.querySelector("#E_score");
  var scoreHTML5 = sessionStorage.getItem("sE");
  display5.innerHTML = scoreHTML5

  var display6 = document.querySelector("#F_score");
  var scoreHTML6 = sessionStorage.getItem("sF");
  display6.innerHTML = scoreHTML6;

  var display7 = document.querySelector("#Fs_score");
  var scoreHTML7 = sessionStorage.getItem("sFs");
  display7.innerHTML = scoreHTML7;

  var display8 = document.querySelector("#G_score");
  var scoreHTML8 = sessionStorage.getItem("sG");
  display8.innerHTML = scoreHTML8;

  var display9 = document.querySelector("#Gs_score");
  var scoreHTML9 = sessionStorage.getItem("sGs");
  display9.innerHTML = scoreHTML9;

  var display10 = document.querySelector("#A_score");
  var scoreHTML10 = sessionStorage.getItem("sA");
  display10.innerHTML = scoreHTML10;

  var display11 = document.querySelector("#As_score");
  var scoreHTML11 = sessionStorage.getItem("sAs");
  display11.innerHTML = scoreHTML11;

  var display12 = document.querySelector("#B_score");
  var scoreHTML12 = sessionStorage.getItem("sB");
  display12.innerHTML = scoreHTML12;

  var display13 = document.querySelector("#C_attempts");
  var attemptsHTML1 = sessionStorage.getItem("aC");
  display13.innerHTML = attemptsHTML1;

  var display14 = document.querySelector("#Cs_attempts");
  var attemptsHTML2 = sessionStorage.getItem("aCs");
  display14.innerHTML = attemptsHTML2;

  var display15 = document.querySelector("#D_attempts");
  var attemptsHTML3 = sessionStorage.getItem("aD");
  display15.innerHTML = attemptsHTML3;

  var display16 = document.querySelector("#Ds_attempts");
  var attemptsHTML4 = sessionStorage.getItem("aDs");
  display16.innerHTML = attemptsHTML4;

  var display17 = document.querySelector("#E_attempts");
  var attemptsHTML5 = sessionStorage.getItem("aE");
  display17.innerHTML = attemptsHTML5;

  var display18 = document.querySelector("#F_attempts");
  var attemptsHTML6 = sessionStorage.getItem("aF");
  display18.innerHTML = attemptsHTML6;

  var display19 = document.querySelector("#Fs_attempts");
  var attemptsHTML7 = sessionStorage.getItem("aFs");
  display19.innerHTML = attemptsHTML7;

  var display20 = document.querySelector("#G_attempts");
  var attemptsHTML8 = sessionStorage.getItem("aG");
  display20.innerHTML = attemptsHTML8;

  var display21 = document.querySelector("#Gs_attempts");
  var attemptsHTML9 = sessionStorage.getItem("aGs");
  display21.innerHTML = attemptsHTML9;

  var display22 = document.querySelector("#A_attempts");
  var attemptsHTML10 = sessionStorage.getItem("aA");
  display22.innerHTML = attemptsHTML10;

  var display23 = document.querySelector("#As_attempts");
  var attemptsHTML11 = sessionStorage.getItem("aAs");
  display23.innerHTML = attemptsHTML11;

  var display24 = document.querySelector("#B_attempts");
  var attemptsHTML12 = sessionStorage.getItem("aB");
  display24.innerHTML = attemptsHTML12;
}