const button = document.querySelector(".toggle-btn");
const circle = document.querySelector(".inner-cicle");
const container = document.querySelector(".toggle-container");

document.addEventListener("click", function (e) {
  if (e.target === circle) {
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "grey";
      circle.classList.remove("inner-circle-active");
    } else {
      button.style.backgroundColor = "green";
      circle.classList.add("inner-circle-active");
    }
  }

  if (e.target === button) {
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "grey";
      circle.classList.remove("inner-circle-active");
    } else {
      button.style.backgroundColor = "green";
      circle.classList.add("inner-circle-active");
    }
  }
});

function rangeSlide(value) {
  document.querySelector("#cash").textContent = `$${value}.00`;
}
