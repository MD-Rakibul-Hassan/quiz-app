// Question and answers //

const questions = [
    {
        question: "What is the capital of banglasesh ? ",
        options: [
            "Dhaka",
            "Khulan",
            "Barishil",
            "Nohakhali"
        ],
        currect:0
    },
    {
        question: "How much population in bangladesh ?",
        options: [
            "145m",
            "150m",
            "165m",
            "170m",
        ],
        currect:2
        
    },
    {
        question: "What is the national langause of Bangladesh ?",
        options: [
            "Hindi",
            "English",
            "Urdo",
            "Bangla"
        ],
        currect:3
    },
   
]

const answers = document.querySelectorAll('.awnser');
const quize = document.querySelector('#quiz')



const allOptions = document.querySelectorAll(".option_1, .option_2, .option_3, .option_4 ");

const questionElem = document.querySelector("#question")


const submitBtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;


const loadQuiz = () => {
    const {question,options}= questions[currentQuiz];

    questionElem.innerHTML = question;

    options.forEach((currentOption, index) => (allOptions[index].innerHTML = currentOption))
}

loadQuiz();

const selectedIndexOption = () => {
    let selected_index;
    answers.forEach((currentOpt, index) => {
        if (currentOpt.checked) {
            selected_index = index;
        }
    })
    return selected_index
}

const deSelectedElement = () => {
    answers.forEach(currentElem => currentElem.checked = false)
}


submitBtn.addEventListener('click', () => {
    
    const selectedIndex = selectedIndexOption();
    if (selectedIndex === questions[currentQuiz].currect) {
        score = score + 1
    }
    currentQuiz++;
    if (currentQuiz < questions.length) {
        deSelectedElement()
       
     loadQuiz()
    }
    else {
        quize.innerHTML = `<div>
        <h1>Currect answer is ${score}</h1>
        <button class="reload-button" onclick="location.reload()">Play agin</button>
        </div>`
    }
})