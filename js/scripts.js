//Business Logic

function counter(input) {

  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes('1')) {
      outputArray.push('beep');
    }
    outputArray.push(i);
  }
}

