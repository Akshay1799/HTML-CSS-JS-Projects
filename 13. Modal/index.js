let container = document.querySelector(".container");
let btn = document.querySelector("button");
let overlay = document.querySelector(".overlay");

// Made the overlay container hidden so "please wait..." message can display
overlay.style.display = "none";

// Create an element P to show initial message
let message = document.createElement("p");
message.textContent = "Please wait...";
message.style.color = "black";
message.style.display = "block";
message.style.backgroundColor = "pink";
message.style.fontSize = "1.5rem";
message.style.textAlign = "center";
message.style.marginTop = "5rem";
document.body.prepend(message);

// made container hidden initially
container.style.display = "none";

// After 3 seconds the container will be display
setTimeout(() => {
  overlay.style.display = "flex";
  message.style.display = "none";
  container.style.display = "flex";
  container.style.border = "1px solid lightgrey";
}, 3000);

// The container will be hidden, when we will click the button inside the container
btn.addEventListener("click", () => {
  overlay.style.display = "none";
  container.style.display = "none";
  message.style.display = "block";
  document.body.style.backgroundColor = "white";
  message.textContent = "Thankyou";
  message.style.color = "black";
});

// The container will be hidden, when we will click outside the container
overlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    overlay.style.display = "none";
    container.style.display = "none";
    message.style.display = "block";
    document.body.style.backgroundColor = "white";
    message.textContent = "Thankyou";
    message.style.color = "black";
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.style.display = "none";
    container.style.display = "none";
    message.style.display = "block";
    document.body.style.backgroundColor = "white";
    message.textContent = "Thankyou";
    message.style.color = "black";
  }
});
