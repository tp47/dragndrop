const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");
let interval;

item.addEventListener("dragstart", handleItemDragStart);
item.addEventListener("dragend", handleItemDragEnd);

placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragenter", handlePlaceholderDragEnter);
  placeholder.addEventListener("dragover", handlePlaceholderDragOver);
  placeholder.addEventListener("dragleave", handlePlaceholderDragLeave);
  placeholder.addEventListener("drop", handlePlaceholderDragDrop);
});

function handleItemDragStart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function handleItemDragEnd(event) {
  event.target.classList.remove("hold", "hide");
}

function handlePlaceholderDragEnter(event) {
  event.target.classList.add("hovered");
}

function handlePlaceholderDragOver(event) {
  event.preventDefault();
}

function handlePlaceholderDragLeave(event) {
  clearInterval(interval);
  event.target.classList.remove("hovered");
}

function handlePlaceholderDragDrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
