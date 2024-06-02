 // keeping to random number into two different variables;
 const num1  = Math.ceil(Math.random() * 10);
 const num2  = Math.ceil(Math.random() * 10);

 // find the question
 const questionE1 = document.getElementById('question');
 const inputE1 = document.getElementById('input');
 const formE1 = document.querySelector('.form');
 const scoreEl1 = document.getElementById("score")
 // Changing the questions value
 questionE1.innerText = `What is ${num1} multiply by ${num2}`;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl1.innerText = `score: ${score}`;

 const correctAns = num1 * num2;

 formE1.addEventListener('submit', (event) => {
    // event.preventDefault();
    // const userAns = parseInt(inputE1.value);
    const userAns = +inputE1.value;
    if(userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
    score--;
    updateLocalStorage();
    }
});
function updateLocalStorage () {
    localStorage.setItem("score",JSON.stringify(score));
}

