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
let level2Counter = 0;
let prevAttempt = null; //Remembers the previous note click for Level 2
let level2FirstKey = "";
let target = null;

function clearScore() { //Re-render the score
  score = 0;
  attempts = 0;
  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;
  target = null; //This is how you reset the target

  newTarget()
}


function changeQuizQ() {
  if (document.getElementById("Level 1").checked){
      document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k &nbsp;&nbsp;&nbsp;t&nbsp;h&nbsp;i&nbsp;s&nbsp;&nbsp;&nbsp; k&nbsp;e&nbsp;y&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
      clearScore();
  } else if (document.getElementById("Level 2").checked){
      document.getElementById("quizQuestion").innerHTML = "C&nbsp;l&nbsp;i&nbsp;c&nbsp;k&nbsp;&nbsp;&nbsp;a&nbsp;l&nbsp;l&nbsp;&nbsp;&nbsp;k&nbsp;e&nbsp;y&nbsp;s&nbsp;&nbsp;&nbsp;n&nbsp;a&nbsp;m&nbsp;e&nbsp;d&nbsp;:&nbsp;&nbsp;<span id='target'>C</span>";
      clearScore();
  }
}

newTarget()

function newTarget() {
  attempts++;
  target = notesList[generateRandomInt(notesList.length)]
  const targetHTML = document.querySelector("#target")
  targetHTML.innerHTML = target;
}

function registerAttempt(note) {
  if(note === target || note === (target + "2")) {
    score++;
  }
  level2ClassRemover(level2FirstKey);
  //Re-render the score
  level2Counter = 0;
  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;

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
      return;
    }
    registerAttempt(note)
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

function playNote(note){
  const path = NOTES[note]
  var audio = new Audio(path);
  audio.play();
}

/*if(document.getElementById('Level 2').checked) { 
  clickNote('G2');
} */