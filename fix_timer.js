//Write a setInterval() function that increases the count by 1 and displays the new count in counterElement every 400 milliseconds. Call clearInterval() to cancel the interval when the count displays 4.


let count = 0;
let counterElement = document.getElementById("counter");
counterElement.innerHTML = count;
let timerId;

function increaseCountTimer() {
   timerId = setInterval(increaseCount, 400);
   if (count == 4) {
      clearInterval();   
   }
}
function increaseCount() {
   count++;
   counterElement = count;
}


