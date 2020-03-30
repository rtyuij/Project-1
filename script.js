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

let score = 0;
let attempts = 0;
let prevAttempt = null; //Remembers the previous note click for Level 2
let target = null;
newTarget()

function newTarget() {
  attempts++;
  target = notesList[generateRandomInt(notesList.length)]
  const targetHTML = document.querySelector("#target")
  targetHTML.innerHTML = target;
}

function registerAttempt(note) {
  //if Level 1
  if(note === target || note === (target + "2")) {
    score++;
  }
  //Re-render the score
  const attemptsHTML = document.querySelector("#attempts")
  const scoreHTML = document.querySelector("#score")
  attemptsHTML.innerHTML = attempts;
  scoreHTML.innerHTML = score;

  target = null; //This is how you reset the target

  newTarget()
}

function generateRandomInt(max){
  return Math.floor(Math.random() * max)
}

function clickNote(note) {
  playNote(note);
  if(target) {
    registerAttempt(note)
  }
}

function playNote(note){
  const path = NOTES[note]
  var audio = new Audio(path);
  audio.play();
}