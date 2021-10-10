/* eslint-disable */
import "bootstrap";
import "/workspace/vanillajs-hello/node_modules/bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let suiteTop = document.querySelector(".suite-top");
  let suiteBottom = document.querySelector(".suite-bottom");
  let suiteNumber = document.querySelector(".suite-number");

  let numberGenerator = () => {
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let randomNumber = Math.floor(Math.random() * number.length);
    return number[randomNumber];
  };

  let suiteGenerator = () => {
    let suite = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
    let randomSuite = Math.floor(Math.random() * suite.length);
    return suite[randomSuite];
  };

  suiteNumber.innerHTML = numberGenerator();
  let same = suiteGenerator();
  let top = (suiteTop.innerHTML = same);
  let bottom = (suiteBottom.innerHTML = same);

  const hiddenCards = () => {
    let x = document
      .getElementById("myDiv")
      .addEventListener("click", hiddenCards);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };
};
