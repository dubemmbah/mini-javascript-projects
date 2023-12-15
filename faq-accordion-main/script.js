"use strict";
const btnsView = document.querySelectorAll(".faq button");
const faqAnswers = document.querySelectorAll(".faq_answer");

btnsView.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    btn.closest(".faq").classList.toggle("active");
  });
});
