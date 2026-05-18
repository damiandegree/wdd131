const { createElement } = require("react");

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');
const li = createElement('li');
const deleteButton = createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);