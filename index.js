// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function writeCards(names, holiday) {
  {
    var messages = [];
    for (let count = 0; count < names.length; count++) {
      messages.push(
        `Thank you, ${names[count]}, for the wonderful ${holiday} gift!`
      );
    }
  }
  return messages;
}

function countDown(enteredNumber) {
  {
    while (enteredNumber >= 0) {
      console.log(enteredNumber);

      enteredNumber--;
    }
  }
}

countDown(100); 
