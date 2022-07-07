const quizData = [
    {
        question: 'Who is the president of Rwanda',
        a: 'Kanambe',
        b: 'Kagame',
        c: 'Makabée',
        d: 'Ruberwa',
        correct: 'b'
    },
    {
        question: 'Who is the UN General Secretary',
        a: 'Kanambe',
        b: 'Pangi-Moon',
        c: 'Macron',
        d: 'Guteres',
        correct: 'd'
    },
    {
        question: 'In which country was decided the colonization of Africa',
        a: 'Ghana',
        b: 'France',
        c: 'Germany',
        d: 'Russia',
        correct: 'c'
    },
    {
        question: 'In what year were the first Air Jordan sneakers released?',
        a: '2000',
        b: '1984',
        c: '2021',
        d: '1999',
        correct: 'b'
    },
    {
        question: 'Which singer’s real name is Stefani Joanne Angelina Germanotta?',
        a: 'Jonathan Gregg',
        b: 'Kabby Lame',
        c: 'Lady Gaga',
        d: 'Stephen Atkins',
        correct: 'b'
    }
]

const questionEl = document.getElementById('question');
const quiz = document.getElementById('quiz');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const  submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
function getSelected(){
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;

    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    const answerEls = document.querySelectorAll(".answer");
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} 
            questions.</h1> <button onclick="location.reload()">Reload</button>`;
        }
    }
})