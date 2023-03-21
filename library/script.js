let library = [];

const addButton = document.querySelector(".content > input[type='button']");
const modal = document.querySelector(".content > .modal");
let modalOn = false;

addButton.onclick = () => {
  modal.style.display = 'initial';
  document.querySelector("#page-mask").style.display = "initial";
  modal.style.filter = "brightness(120%)";
  modalOn = true;
}

window.onclick = (event) => {
  if (modalOn === true && !modal.contains(event.target) && event.target !== addButton) {
    modal.style.display = "none";
    document.querySelector("#page-mask").style.display = "none";
    modalOn = false;
  }
}


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    library.append(new Book(author, title, pages, read));
}