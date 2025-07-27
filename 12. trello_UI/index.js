const btn = document.querySelector("button");
const containers = document.querySelectorAll(".container");

btn.addEventListener("click", (e) => {
  const textArea = document.createElement("textarea");

  // made the textArea draggable.
  textArea.draggable = true;

  // generate id for each text area.
  textArea.id = Math.random() * 100;

  textArea.addEventListener("dragstart", ondragstart);
  textArea.addEventListener("dragend", ondragend);

  const container1 = document.querySelector("#container-1");
  container1.appendChild(textArea);
});

function ondragstart(e) {
  e.dataTransfer.setData("text", e.target.id);
}
function ondragend(e) {
  e.target.classList.remove("drag");
}

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
});

containers.forEach((container) => {
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const textAreaId = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(textAreaId));
  });
});
