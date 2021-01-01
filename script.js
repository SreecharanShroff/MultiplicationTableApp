(function () {
  const btnMultiplyTable = document.querySelector("#btn-multiply-table");
  const result = document.querySelector("#result");
  function showMultiplyTable() {
    while (result.hasChildNodes()) {
      result.removeChild(result.firstChild);
    }
    const multiplyNumber = parseInt(
      document.getElementById("multiply-table-number").value
    );
    const reverse = document.getElementById("reverse").checked;
    if (reverse) {
      for (let i = 10; i >= 1; i--) {
        generateTableRow(multiplyNumber, i);
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        generateTableRow(multiplyNumber, i);
      }
    }
  }
  function generateTableRow(multiplyNumber, i) {
    const div = document.createElement("div");
    div.innerHTML = multiplyNumber + " x " + i + " = " + multiplyNumber * i;
    result.appendChild(div);
  }
  btnMultiplyTable.addEventListener("click", showMultiplyTable);
})();
