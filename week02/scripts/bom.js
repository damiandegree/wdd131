const { createElement } = require("react");

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

button.addEventListener("click",() => function() {
    if (input.value != "") {
      const li = createElement("li");
      li.textContent = input.value;

      const deleteButton = createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
      li.appendChild(deleteButton);
      list.appendChild(li);
      input.value = '';
     }
     input.focus();
});
