const questions=[
    {
        "question": "Which is the largest desert in the world?",
        "answers": [
            { "text": "Kalhari", "correct": "false" },
            { "text": "gobi", "correct": "false" },
            { "text": "Sahara", "correct": "false" },
            { "text": "Antarctica", "correct": "true" }
        ]
    },
    {
        "question": "Which is the longest river in the world?",
        "answers": [
            { "text": "Amazon", "correct": "false" },
            { "text": "Yangtze", "correct": "false" },
            { "text": "Nile", "correct": "true" },
            { "text": "Mississippi", "correct": "false" }
        ]
    },
    {
        "question": "Which is the tallest mountain in the world?",
        "answers": [
            { "text": "K2", "correct": "false" },
            { "text": "Kangchenjunga", "correct": "false" },
            { "text": "Mount Everest", "correct": "true" },
            { "text": "Lhotse", "correct": "false" }
        ]
    },
    {
        "question": "Which is the largest ocean in the world?",
        "answers": [
            { "text": "Atlantic Ocean", "correct": "false" },
            { "text": "Indian Ocean", "correct": "false" },
            { "text": "Arctic Ocean", "correct": "false" },
            { "text": "Pacific Ocean", "correct": "true" }
        ]
    },
    {
        "question": "Which is the most populous country in the world?",
        "answers": [
            { "text": "India", "correct": "false" },
            { "text": "United States", "correct": "false" },
            { "text": "China", "correct": "true" },
            { "text": "Indonesia", "correct": "false" }
        ]
    },
    {
        "question": "Which is the smallest country in the world by area?",
        "answers": [
            { "text": "Monaco", "correct": "false" },
            { "text": "San Marino", "correct": "false" },
            { "text": "Liechtenstein", "correct": "false" },
            { "text": "Vatican City", "correct": "true" }
        ]
    },
    {
        "question": "Which is the largest island in the world?",
        "answers": [
            { "text": "New Guinea", "correct": "false" },
            { "text": "Borneo", "correct": "false" },
            { "text": "Madagascar", "correct": "false" },
            { "text": "Greenland", "correct": "true" }
        ]
    },
    {
        "question": "Which is the hottest planet in our solar system?",
        "answers": [
            { "text": "Mercury", "correct": "false" },
            { "text": "Mars", "correct": "false" },
            { "text": "Venus", "correct": "true" },
            { "text": "Jupiter", "correct": "false" }
        ]
    }
];


const questionElement=document.getElementById("question");
const answerbuttons=document.getElementById("answer-buttons");
const nextbutton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answers =>{
        const button =document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    })

}
function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}`;
    nextbutton.innerHTML="Attempt Again"
    nextbutton.style.display="block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}




nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();