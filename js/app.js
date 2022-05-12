'use strict';

//console.log(answer1);

// if (true) {
//   console.log('In a condition that executes always.');
// }

// if (false) {
//   console.log('In a condition that executes never!');
// }

if (Math.random() > 0.5) {
  console.log('This condition maybe runs!');
}

let answer1 = prompt('How is your day going').toLowerCase();

if (answer1 === 'good') {
  alert('i am glad to hear that');
} else if (answer1 === 'bad') {
  alert('i am sorry to hear that');
} else if (answer1 === 'just ok') {
  alert('ok is better then bad');
} else {
  alert('absolutely delightful');
}

// switch (answer1) {
// case 'good':
//   console.log('that is excellent');
//   break;
// case 'just ok':
//   console.log('thats ok It happens');
//   break;
// case 'bad':
//   console.log('i hope it gets better');
//   break;
// default:
//   console.log(answer1 + 'keep on killin it');
// }
