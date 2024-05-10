const DEFAULT_VALUE = 'Anonymous';

(() => {
  const nameInput = document.getElementById("name-input");
  const nameOutput = document.getElementById("name-output");

  nameInput.addEventListener("input", function () {
    const value = nameInput.value.trim();

    nameOutput.textContent = value ?? DEFAULT_VALUE;
  });
})();
