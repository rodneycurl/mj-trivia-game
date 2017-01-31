$(document).ready(function(){
// build a flash-cards flip game that marks when the player got the flash-card right or wrong (Based on Michael Jordan).
// build a landing page "Which Jordan Did What?" add a "Play Now" button
// if the player gets the flash-card correct, congratulate them (alert). Then reveal a button that will allow the player to move on to the next question.
// if the player gets the flash-card wrong, notify them they are wrong and reveal the answer (alert). Then reveal a button that will allow the player to move on to the next question.
// create a headline introducing the question. add an image under the <h1>. write the question in <h2> or <p>. Build an input field for the player to enter their answer with a "submit" button.
// output a jordan for each level depending on the number of questions you get correct.
// ask 5 questions total.
// Reveals: 1 Correct Answers, Michael Jordan, Wizards -m "Just go sit down somewhere man you old playa!"
// Reveals: 2 Correct Answers, Michael Jordan, Langley High School -m "C'mon man you still got to learn the game!"
// Reveals: 3 Correct Answers, Michael Jordan, GM of Bob Cats -m "You got a long way to go playa!"
// Reveals: 4 Correct Answers, Michael Jordan, UNC Chapel Hill -m "Yeah You the man but the best is yet to come!"
// Reveals: 5 Correct Answers, Michael Jordan, Bulls -m "Your a God when it comes to this game, but can you three-peat?"
// Randomize the responses whether right or wrong. If a person guess a wrong answer they'll get a gif from the 'wrong answer folder'. If a person guess right they'll get a gif from the 'right answer' folder.
// Find out whether or not the player is a true Michael Jordan enthusiast/fan.
// Questions and Answers Below:
// Q: What jersey number did Michael Jordan wear? A: 23
// Q: What state is Michael Jordan from? A: North Carolina
// Q: What team did Michael Jordan win Championships with in the NBA? A: Chicago Bulls
// Q: What the name of the movie Michael Jordan was in with Bugs Bunny? A: Space Jam
// Q: What was the second number Michael Jordan wear in the NBA? A: 45
// Q:A +more

var questionList = [
  {
    id: 1,
    text: 'What state is Michael Jordan from?',
    answer: 'North Carolina'},
    {
      id: 2,
      text:'What was Michael Jordan\'s jersey number for the majority of his career in the NBA?',
      answer: '23'
    },
    {
      id: 3,
      text:'What team did Michael Jordan win a NBA Championship title with?',
      answer: 'Chicago Bulls'
    },
    {
      id: 4,
      text:'What\'s the name of the movie Michael Jordan starred in with Bugs Bunny?',
      answer: 'Space Jam'
    },
    {
      id: 5,
      text:'What MLB Baseball team did Michael Jordan play for?',
      answer: 'White Soxs'
    },
    {
      id: 6,
      text:'What college did Michael Jordan attend?',
      answer: 'UNC Chapel Hill'
    },
    {
      id: 7,
      text:'What shoes did Michael Jordan wear in the flu game?',
      answer: 'Air Jordan 12 Black/Red'
    },
]

var currentQuestion = 0

// REMEMBER $('.message').html('<h1> You Won </h1>') //// $('.message').html()

function beginGame() {
  //instead of console log, this is where you would use jquery to change the text/images on DOM
  console.log(questionList[currentQuestion].text);
  $(".questionsList").html( questionList[currentQuestion].text );
  console.log('begin');
}

  $(".inputanswersubmit").click(nextQuestion)

function nextQuestion(){
  //instead of console log, this is where you would use jquery to change the text/images on DOM
  currentQuestion++
  $(".questionsList").html( questionList[currentQuestion].text );
  console.log($(".questionsList").html())
}
beginGame()
});
