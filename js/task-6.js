function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

(() => {
  const input = document.querySelector("input");
  const createBtn = document.querySelector("[data-create]");
  const destroyBtn = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  function createBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      /* Each next box will have size */
      const size = 30 + i * 10;

      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(box);
    }

    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  createBtn.addEventListener("click", () => {
    destroyBoxes();

    const amount = input.value;
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = "";
    } else {
      alert("Plz, use values from 1 to 100");
    }
  });

  destroyBtn.addEventListener("click", () => {
    destroyBoxes();
  });
})();
