var readlineSync = require('readline-sync')

var score = 0

console.log("Hey! Welcome to How much do you know me? Quiz Made by Anjali Garg:) ")

var userName = readlineSync.question("What's your name? ")

console.log("Best of Luck " + userName + ". Hope you'll complete both levels.")

console.log("There will be 2 levels, if you will complete level 1 then you will be entered to next level.\nSo lets start, here's your first question.\n")

var questionsAnswers = [
  {
    question:"What is my full name ",
    answer:"Anjali Garg"
  },
  {
    question:"Who is my favourite Actor? ",
    answer:"Shahrukh Khan"
  },
  {
    question:"What is my favourite color? ",
    answer:"Black"
  },
  {
    question:"Which is my favourite chaat? ",
    answer:"Gol Gappe"
  },
  {
    question:"What is my favourite drink? ",
    answer:"Tea"
  },
  {
    question:"What I will prefer more? Beach or Mountain? ",
    answer:"Mountain"
  },
  {
    question:"What is my favourite dry fruit? ",
    answer:"Walnut"
  },
  {
    question:"Which is my favourite cuisine? ",
    answer:"Chinese"
  },
  {
    question:"Which is my favourite flower? ",
    answer:"Orchids"
  },
  {
    question:"If I won a lottery, what will I buy?  ",
    answer:"Villa"
  }
]

function play(question, answer) {

  var userAnswer = readlineSync.question(question)

  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct answer ")
    score +=1
  }else {
    console.log("Wrong Answer ")
  }

  console.log("currentScore: ", score)
  console.log("-------------------------------------------------------------")
}


for(var i=0;i<5;i++) {
  play(questionsAnswers[i].question, questionsAnswers[i].answer)
}

if(score == 5 ) {
  console.log("Congratulations! You have reached now level 2.\n")
  for(var i=5;i<questionsAnswers.length;i++) {
    play(questionsAnswers[i].question, questionsAnswers[i].answer)
  }
}else {
  console.log("Final Score: ", score)
  console.log("Try again to reach next level!!")
}

if(score == 10 ) {
  console.log("Final Score: ", score)
  console.log("Yay!! you won!!!!!")
} else {
  console.log("Final Score: ", score)
  console.log("Better luck next time:)")
}