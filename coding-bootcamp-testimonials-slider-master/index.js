const john = document.querySelector(".john");
const tanya = document.querySelector(".tanya");
const prevButtons = document.querySelectorAll(".prev__button");
const nextButtons = document.querySelectorAll(".next__button");


john.classList.add("hide");


const slideChange = () => {
  if (john.classList.contains("hide")) {
    john.classList.remove("hide");
    tanya.classList.add("hide");
  } else if (tanya.classList.contains("hide")) {
    tanya.classList.remove("hide");
    john.classList.add("hide");
  } else {
    john.classList.add("hide");
  }
};


prevButtons.forEach((button) => button.addEventListener("click", slideChange));
nextButtons.forEach((button) => button.addEventListener("click", slideChange));

