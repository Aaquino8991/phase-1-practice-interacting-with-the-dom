let counter = 0;
let counterElement = document.getElementById('counter');
let startTimer;
let timerRunning = true;

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const heartList = document.querySelector('.likes')


let timer = document.addEventListener('DOMContentLoaded', () => {
    startTimer = setInterval(() => {
    counter++;
    counterElement.textContent = counter;
  }, 1000);
});

function pauseResumeTimer() {
  if (timerRunning) {
    clearInterval(startTimer);
    pauseButton.textContent = 'resume'
    plusButton.disabled = true;
    minusButton.disabled = true;
    heartButton.disabled = true;
  } else {
    startTimer = setInterval(() => {
      counter++;
      counterElement.textContent = counter;
    }, 1000);
      pauseButton.textContent = 'pause'
      plusButton.disabled = false;
      minusButton.disabled = false;
      heartButton.disabled = false;
  }
  timerRunning = !timerRunning;
}

pauseButton.addEventListener('click', pauseResumeTimer)

const incrementByOne = () => {
  counter++;
  counterElement.textContent = counter;
};

plusButton.addEventListener('click', incrementByOne)

const decrementByOne = () => {
  counter--;
  counterElement.textContent = counter;
};

minusButton.addEventListener('click', decrementByOne);


let likes = [];

function heartButtonClicked() {
  likes[counter] = (likes[counter] || 0) + 1;
  const newListItem = document.createElement('li');
  const listText = document.createTextNode(`${counter} liked your post ${likes[counter]} times!`);
  newListItem.appendChild(listText);
  heartList.appendChild(newListItem);
}

const likeNumber = () => {
  if (!likes[counter]) {
    likes[counter] = 0;
  }
  likes[counter]++;
  updateLikes();
};

heartButton.addEventListener('click', heartButtonClicked);


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => { 
    e.preventDefault();
    handleComment(e.target.comment_input.value);
    e.target.comment_input.value = ''
  })
})

function handleComment (comment) {
  let p = document.createElement('p');
  p.textContent = comment;
  document.querySelector('.comments').appendChild(p);
}