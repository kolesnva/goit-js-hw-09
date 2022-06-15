const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]')
};

const DELAY = 1000;
let switchInterval = 0;
const btnNotActive = true;

refs.startButton.addEventListener('click', switchStart);
refs.stopButton.addEventListener('click', switchStop);

refs.stopButton.disabled = btnNotActive;

function switchStart() {
  refs.startButton.disabled = btnNotActive;
  refs.stopButton.disabled = !btnNotActive;

  colorSwitcher();

  switchInterval = setInterval(colorSwitcher, DELAY);
};

function colorSwitcher() {
  document.body.style.backgroundColor = getRandomHexColor();
};

function switchStop() {
  refs.startButton.disabled = !btnNotActive;
  refs.stopButton.disabled = btnNotActive;

  clearInterval(switchInterval);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};