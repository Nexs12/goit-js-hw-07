'use strict'


const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const trimmedValue = textInput.value.trim();

  if (trimmedValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = trimmedValue;
  }
});


