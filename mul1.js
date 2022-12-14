const bars = document.getElementById("bars")
const navl = document.getElementById("navl")

bars.addEventListener("click", () => {
    navl.classList.toggle('active');
    // console.log("Abhinav")
    bars.classList.toggle("fa-times")
})


// multiply Page JS
const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
// console.log(num1)
// console.log(num2)

const que = document.getElementById('que')
(num1||num2)?
(que.innerText = "What is" + " " + num1 + " " + 'multiply by' + " " + " " + num2 + " "+"?"):
que.innerText =""


const answer = document.getElementById("ans")

const form = document.getElementById('form')
const menubtn = document.getElementById('btn')

const correctans = num1 * num2;
// console.log(correctans)

const score = document.getElementById("score");

let scodis = JSON.parse(localStorage.getItem("scodis"));
menubtn.addEventListener('click', () => {
    // console.log("Abhinav");
    if (correctans == answer.value) {
        scodis += 1
        locstorage()
    }
    else {
        scodis = 0;
        locstorage()

    }
})

function locstorage() {
    localStorage.setItem("scodis", JSON.stringify(scodis))
}
score.innerText = "Score:" + " " + scodis;
