"use strict";
let submit = document.querySelector(".submit");
let myComments = document.querySelector(".comments");
let input = document.querySelector(".commentInput");

function myTemplate(myData) {
  myComments.insertAdjacentHTML(
    "beforeend",
    `
    <div class="comment flex items justify-start">
    <img class="avatar" src="${myData.avatar}" alt="Avatar" />
    <div class="flex-1">
      <h3 class="author">${myData.author}</h3>
      <div class="body">${myData.comment}</div>
    </div>
  </div>

    `
  );
}

function appendComments(e) {
  // show the data
  const myData = {
    avatar:
      "https://images.pexels.com/photos/35183/people-homeless-man-male.jpg",
    comment: input.value,
    author: "Jemes Doue",
  };
  // preventform submit
  e.preventDefault();

  //if comment textare is empty do not submit
  if (input.value.length < 1) return;

  //add to html
  myTemplate(myData);

  // empty the fild after  add a  comment
  input.value = "";

  //set to local Storage
  localStorage.setItem("comment", myComments.innerHTML);
}

submit.addEventListener("click", appendComments, myComments.innerHTML);

// get data in the localStorage
let saved = localStorage.getItem("comment");

// check if data is saved in the localStorage
if (saved) {
  myComments.innerHTML = saved;
}
