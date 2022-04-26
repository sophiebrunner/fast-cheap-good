const fastCheckbox = document.querySelector("#fast");
const cheapCheckbox = document.querySelector("#cheap");
const goodCheckbox = document.querySelector("#good");
let lastCheckbox = null;

function toggleCheckbox(clickedCheckbox, secondCheckbox, thirdCheckbox) {
  if (
    clickedCheckbox.checked &&
    secondCheckbox.checked &&
    thirdCheckbox.checked
  ) {
    lastCheckbox.checked = false;
  }
  lastCheckbox = clickedCheckbox;
}

fastCheckbox.addEventListener("change", function () {
  toggleCheckbox(fastCheckbox, cheapCheckbox, goodCheckbox);
});

cheapCheckbox.addEventListener("change", function () {
  toggleCheckbox(cheapCheckbox, fastCheckbox, goodCheckbox);
});

goodCheckbox.addEventListener("change", function () {
  toggleCheckbox(goodCheckbox, cheapCheckbox, fastCheckbox);
});
