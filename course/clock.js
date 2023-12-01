const secondHand = document.querySelector('.hand-second-hand')
const minHand = document.querySelector('.hand-min-hand')
const hourHand = document.querySelector('.hand-hour-hand')
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  console.log(seconds);
  const secondsDegrees = ((seconds/60)*360)+60;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins/60)*360)+90;
  minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour/12)*360)+180;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000);