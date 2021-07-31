// form //
var userName = document.getElementById('user');
var email = document.getElementById('email');
var form = document.getElementById('quizForm');
// start quiz //
var start = document.getElementById('start');
// quizz 
var body = document.getElementById('main');
var firstName = document.getElementById('firstName');
var userEmail = document.getElementById('userEmail');
var x =userName.value;
/// form ///
function submit() {

    if (userName.value == '' || email.value == '') {
        alert('Oops! Form must be filled');
    } else {
        start.classList.remove('hide');
        form.classList.add('hide');
        firstName.innerHTML = userName.value;
        userEmail.innerHTML = email.value;
    }
}

/// Start Quiz ///
/// Timer ///
var second = document.getElementById('second');
var minute = document.getElementById('minute');
var timer;
var min = 2;
var sec = 60;
function startQuiz() {
    start.classList.add('hide');
    body.classList.remove('hide');
    timer = setInterval(function () {
        sec--;
        second.innerHTML = sec;
        if (sec == 0) {
            min--;
            minute.innerHTML = min;
            sec = 60;
        }
        else if (min == 0) {
            getResult()
        }
    }, 1000);
}
// setTimeout(() => {
//     clearInterval(timer)
// }, 7200000);
var questionsArr = [
    {
        id: '1 ',
        quest: 'What is a group of lions called? ',
        option: {
            a: 'Band',
            b: 'Pride',
            c: 'Fleet',
            d: 'Bunch'
        },
        answer: 'Pride'
    },
    {
        id: '2 ',
        quest: 'How many legs does an octopus have?',
        option: {
            a: 'Eight',
            b: 'Ten',
            c: 'Two',
            d: 'Six'
        },
        answer: 'Eight'
    },
    {
        id: '3 ',
        quest: 'What is the largest mammal in the world? ',
        option: {
            a: 'Elephant',
            b: 'Zebra',
            c: 'Shark',
            d: 'Whale'
        },
        answer: 'Whale'
    },
    {
        id: '4 ',
        quest: 'Can an ostrich fly?',
        option: {
            a: 'No',
            b: 'Yes',
            c: 'Maybe yes',
            d: 'None'
        },
        answer: 'No'
    },
    {
        id: '5 ',
        quest: ' What animal is the tallest in the world? ',
        option: {
            a: 'Kangroo',
            b: 'Dinosaur',
            c: 'girraffe',
            d: 'none of them'
        },
        answer: 'girraffe'
    }
]
var question = document.getElementById('question');
var option = document.getElementsByClassName('option');
var next = document.getElementById('next');
var finish = document.getElementById('finish');
var best = document.getElementById('best');
var result = document.getElementById('result');
var points = document.getElementById('points');
var footer = document.getElementById('footer');

var count = 0;
function displayQuestion() {
    question.innerHTML = questionsArr[count].quest;
    option[0].innerHTML = questionsArr[count].option.a;
    option[1].innerHTML = questionsArr[count].option.b;
    option[2].innerHTML = questionsArr[count].option.c;
    option[3].innerHTML = questionsArr[count].option.d;
    footer.innerHTML = questionsArr[count].id + '/ ' + questionsArr.length;

    next.classList.add('hide');
}
displayQuestion();
function nextQuestion() {
    if (!(count == questionsArr.length-1 )) {
        count++;
        displayQuestion()
    } else {
        next.classList.add('hide');
        finish.classList.remove('hide');
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.remove('disabled');
        option[i].classList.remove('correct');
        option[i].classList.remove('wrong');
    }
    best.src = 'images/best.jpg';
}


for (var i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', 'select(this)');
}
var counter = 0;
var score = 0;
function select(e) {
    if (e.innerHTML === questionsArr[counter].answer) {
        score = score + 10
        e.classList.add('correct');
        best.src = 'images/correct.jpg'
    } else {
        e.classList.add('wrong');
        best.src = 'images/wrong.jpg'
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.add('disabled')
    }

    next.classList.remove('hide');
    counter++;
}
var resultImg = document.getElementById('resultImg')
function getResult() {
    result.classList.remove('hide');
    body.classList.add('hide');
if(score >= 40){
    points.innerHTML = userName.value + ' scored ' + score + ' / 50';
}else{
    resultImg.src = 'images/luck.jpg';
    points.innerHTML = userName.value + ' scored ' + score + ' / 50';
}
    
}