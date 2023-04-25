const quizData = [
  {
    question: "What is the longest river in Bulgaria?",
    a: "Maritsa",
    b: "Danube",
    c: "Iskar",
    d: "Struma",
    correct: "c",
  },
  {
    question: "In which year did Bulgaria join the EU?",
    a: "2005",
    b: "2007",
    c: "2001",
    d: "2008",
    correct: "b",
  },
  {
    question: "In which of the following sports did Bulgaria win a gold medal at the Olympic Games?",
    a: "Biathlon",
    b: "Ski jumping",
    c: "Hockey",
    d: "Cross-country skiing",
    correct: "a",
  },
  {
    question: "Which of the following cities has over 8,000 years of history, making it one of the oldest continuously inhabited cities in Europe?",
    a: "Istanbul",
    b: "Madrid",
    c: "Plovdiv",
    d: "Varna",
    correct: "c",
  },
  {
    question: "When were women deputies elected for the first time in the Bulgarian National Assembly?",
    a: "1909",
    b: "1944",
    c: "1937",
    d: "1945",
    correct: "d",
  },
  {
    question: "When is a currency board introduced regarding the lev, which ties it to the euro rate?",
    a: "1997",
    b: "1995",
    c: "2001",
    d: "1999",
    correct: "a",
  },
  {
    question: "Which of the following countries was not an ally of Bulgaria during the First World War?",
    a: "Austria-Hungary",
    b: "Ottoman Empire",
    c: "Switzerland",
    d: "Romania",
    correct: "c",
  },
  {
    question: "In which settlement was measured the lowest temperature in Bulgaria, the remarkable -38.3 degrees?",
    a: "Tran",
    b: "Sadovo",
    c: "Smolyan",
    d: "Knezha",
    correct: "a",
  },
  {
    question: "Where is the longest beach, 12 kilometers long?",
    a: "Shabla",
    b: "Nesebar",
    c: "Shkorpilovtsi",
    d: "Krapets",
    correct: "c",
  },
  {
    question: "The approximate population of Bulgaria nowadays is:",
    a: "6.8 millions",
    b: "7.4 millions",
    c: "7.6 millions",
    d: "6.5 millions",
    correct: "a",
  },
  {
    question: "11.) The Time Zone of Bulgaria is:",
    a: "EET",
    b: "CET",
    c: "UTC",
    d: "MSK",
    correct: "a",
  },
  {
    question: "12.) Neighbour of Bulgaria is not:",
    a: "Macedonia",
    b: "Romania",
    c: "Kosovo",
    d: "Greece",
    correct: "c",
  },
  {
    question: "13.) The country code of Bulgaria is:",
    a: "+395",
    b: "+11",
    c: "+2",
    d: "+359",
    correct: "d",
  },
  {
    question: "14.) Which of these cities is known as \"The Small Vienna\"?",
    a: "Plovdiv",
    b: "Dobrich",
    c: "Sofia",
    d: "Rousse",
    correct: "d",
  },
  {
    question: "15.) Which of these drinks is typically bulgarian?",
    a: "Whiskey",
    b: "Wine",
    c: "Rakiya",
    d: "Vodka",
    correct: "c",
  },
  {
    question: "16.) which event leads to the Liberation of Bulgaria from Turkish slavery?",
    a: "The Russian-Turkish War (1877 - 1878)",
    b: "The April Uprising (1876)",
    c: "The Uprising of Captain Nikola (1856)",
    d: "The Crimea War (1853 - 1856)",
    correct: "a",
  },
  {
    question: "17.) On the territory of which countries was the first Bulgarian state located?",
    a: "Bulgaria and Romania",
    b: "Romania and Ukraine",
    c: "Ukraine and Russia",
    d: "Russia and Kazakhstan",
    correct: "a",
  },
  {
    question: "18.) Which religion did the proto-Bulgarians practice before accepting Christianity?",
    a: "Islam",
    b: "Christianity",
    c: "Tengrism",
    d: "Slavic Paganism",
    correct: "c",
  },
  {
    question: "19.) Bulgaria is the home of the Cyrillic alphabet, which is still used today in countries in Europe and Asia. One of these countries is:",
    a: "Uzbekistan",
    b: "Mongolia",
    c: "Georgia",
    d: "Turkmenistan",
    correct: "b",
  },
  {
    question: "20.) Bulgaria adopted Orthodoxy as early as 864, but during the reign of one Bulgarian ruler, it briefly joined the Catholic world. Who is this ruler?",
    a: "Tsar Ivan Asen II",
    b: "Tsar Kaloyan",
    c: "Tsar Petar I",
    d: "Tsar Simeon the Great",
    correct: "b",
  },
]

let quiz=document.getElementById('quiz');
let questionEl = document.getElementById('question');
let answerEls = document.querySelectorAll(".answer");
let a_text = document.getElementById('a_text');
let b_text = document.getElementById('b_text');
let c_text = document.getElementById('c_text');
let d_text = document.getElementById('d_text');
let submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

   answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer == quizData[currentQuiz].correct) {
    score++;
  } 

  if (!answer) {
    alert('Choose an answer!');
    answer=getSelected();
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML=`<h2>You finished the quiz.
    Your score is: ${score}/20.<h2>
    <button onclick="location.reload()">Reload</button>`
  }
});