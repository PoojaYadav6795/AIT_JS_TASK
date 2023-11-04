// Get the counter element and increase, decrease, and reset buttons.
let counter = document.getElementById('result');
let countIncrease = document.getElementById('increase');
let countDecrease = document.getElementById('decrease');
let countReset = document.getElementById('reset');

// Add an event listener to the increase button.
countIncrease.addEventListener('click', () => {
  counter.innerHTML++;   // Increment the counter
  applycolor();  // Apply color by using function
});

// Add an event listener to the decrease button.
countDecrease.addEventListener('click', () => {
  counter.innerHTML--;  // Decrement the counter
  applycolor();      // Apply color by using function
});

// Add an event listener to the Reset button.
countReset.addEventListener('click', () => {
  counter.innerHTML = 0;   // Reset the counter 0.
  applycolor();     // Apply color by using function
});


// Function to apply the appropriate color to the counter.
function applycolor(){
 // If the counter is positive, set its color to green
  if (counter.innerHTML>0){
  counter.style.color = "green";
  // If the counter is negative, set its color to red
 }else if(counter.innerHTML<0){
  counter.style.color = "red";
  // Otherwise, set its color to black
 }else{
  counter.style.color = "black";
 }
}
