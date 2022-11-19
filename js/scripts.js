//Business Logic

function counter(input) {

  let outputArray = [];
  for (let i = 0; i <= input; i++) {
    if (i.toString().includes('3')) {
      outputArray.push("won't you be my neighbor?");
    }
    else if (i.toString().includes('2')) {
      outputArray.push('boop');
    }
    else if (i.toString().includes('1')) {
      outputArray.push('beep');
    }
    else {
      outputArray.push(i.toString());
    }
  }
  return outputArray.join('\n');
}

// UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const userInput = parseInt(document.querySelector('input#number').value);
  let output = counter(userInput);
  document.getElementById('output').innerText = output;
  document.getElementById("getNumber").reset();
}

window.addEventListener("load", function() {
  document.querySelector("form#getNumber").addEventListener("submit", handleFormSubmission);
});