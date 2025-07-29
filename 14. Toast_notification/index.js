let btn = document.querySelector("button");
let cancel = document.querySelector("span");
let toast = document.querySelector(".para");

// Made toast hidden initially
toast.style.display = "none";


// The timeout will run on every click no matter if you refresh the page or not,
// and the toast will fade out after 3 seconds you click the button
btn.addEventListener("click", () => {
  toast.style.display = "block";
  toast.classList.remove("hide");
  btn.style.display = "none";

  setTimeout(() => {
    toast.classList.add("hide");

    setTimeout(() => {
      toast.style.display = "none";
      btn.style.display = "flex";
    }, 1500);
  }, 1500);
});

// To make the toast hidden manually by clicking on cross icon
cancel.addEventListener("click", () => {
  toast.style.display = "none";
  btn.style.display = "flex";
  toast.classList.remove("hide");
});
