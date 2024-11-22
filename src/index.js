// Add javascript code to Party Parrot Clicker such that:

// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up

const state = {
  parrotClick: null,
  clickCount: 0
}

// const increaseCount = () => {
//   let click = 0; 
//   while (click < 10) {
//     click++
//   }
// };

const loadControls = () => {
  state.parrotClick = document.getElementById('parrot-click');
  state.clickCount = document.getElementById('click-count');

}

const clickParrotListener = () => {
  ++state.clickCount;
  state.clickCount.textContent = state.clickCount;
}

const registerEventHandlers = () => {
  loadControls();
  state.parrotClick.addEventListener('click', () => {
  });
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
