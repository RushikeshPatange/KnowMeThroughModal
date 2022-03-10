"use strict";

const ClickMe = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const CloseMe = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

// console.log(ClickMe);
// console.log(modal);
// console.log(CloseMe);
// console.log(overlay);

const showModal = () => {
  //   console.log("clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  //   console.log("clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const escModal = (e) => {
  //   console.log("clicked");
  //   console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
};

ClickMe.addEventListener("click", showModal);
CloseMe.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
body.addEventListener("keydown", escModal);
