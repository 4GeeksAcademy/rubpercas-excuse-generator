/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "My friend",
    "A horse"
  ];
  let action = ["ate", "peed", "crushed", "broke", "poo", "burned", "wet"];
  let what = ["my homework", "my phone", "the car", "my TV", "my computer"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "while I was saving childrens"
  ];

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[random1] +
    " " +
    action[random2] +
    " " +
    what[random3] +
    " " +
    when[random4];
};
