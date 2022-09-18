"use strict";

// === elements ===
const valueOne = document.getElementById("value-1");
const valueTwo = document.getElementById("value-2");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const removeBtn = document.querySelector(".remove");
const result = document.getElementById("result-1");
const signBtn = document.getElementById("sign-2");
const dot = document.querySelector(".dot");

// === clear all input values ===
clearBtn.addEventListener("click", () => {
  valueOne.textContent = "";
  valueTwo.textContent = "";
  result.textContent = "";
  signBtn.textContent = "";
});

// === addition function === //
function addFunc(x, y) {
  const sum = (x * 10 + y * 10) / 10;
  return sum;
}

// === subtraction function === //
function subFunc(x, y) {
  const diff = (x * 10 - y * 10) / 10;
  return diff;
}

// === division function === //
function divideFunc(x, y) {
  const divide = x / y;
  return divide;
}

// === multiplication function === //
function multiplyFun(x, y) {
  const multiply = x * y;
  return multiply;
}

// === remove values ===
removeBtn.addEventListener("click", () => {
  let strOne = valueOne.textContent;
  let strTwo = valueTwo.textContent;
  if (valueOne.textContent !== "" && valueTwo.textContent === "") {
    valueOne.textContent = strOne.substring(0, strOne.length - 1);
  } else {
    valueOne.textContent = valueOne.textContent;
    valueTwo.textContent = strTwo.substring(0, strTwo.length - 1);
  }
});

// numbers loop through ===
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  element.addEventListener("click", function (e) {
    valueTwo.textContent += Number(e.target.textContent);
  });
}

// === operators loop through ===
operators.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (
      e.target.textContent === "+" ||
      e.target.textContent === "-" ||
      e.target.textContent === "/" ||
      e.target.textContent === "*"
    ) {
      valueOne.textContent = Number(valueTwo.textContent);
      signBtn.textContent = e.target.textContent;
      valueTwo.textContent = "";
    } else if (e.target.textContent === "=" && signBtn.textContent === "+") {
      result.innerText = addFunc(
        Number(valueOne.textContent),
        Number(valueTwo.textContent)
      );
    } else if (e.target.textContent === "=" && signBtn.textContent === "-") {
      result.innerText = subFunc(
        Number(valueOne.textContent),
        Number(valueTwo.textContent)
      );
    } else if (e.target.textContent === "=" && signBtn.textContent === "/") {
      result.innerText = divideFunc(
        Number(valueOne.textContent),
        Number(valueTwo.textContent)
      );
    } else if (e.target.textContent === "=" && signBtn.textContent === "*") {
      result.innerText = multiplyFun(
        Number(valueOne.textContent),
        Number(valueTwo.textContent)
      );
    } else if (e.target.textContent === ".") {
      valueTwo.textContent += e.target.textContent;
    }
  });
});
