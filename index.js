const mainTab = document.querySelector(".main");
const mainDrop = Document.querySelector(".main-drop");

mainTab.addEventListener("mouseover", () => {
  mainDrop.classList.remove("hide");
});
