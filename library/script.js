let library = [];

const addButton = document.querySelector(".content > input[type='button']");
const form = document.querySelector(".content > form");
let modalOn = false;

addButton.onclick = () => {
  form.style.display = 'initial';
  document.querySelector("body").style.filter = 'brightness(80%)';
  modalOn = true;
  console.log(modalOn);
}

window.onclick = (event) => {
  if (event.target !== form && event.target !== addButton && modalOn === true) {
    form.style.display = "none";
    document.querySelector("body").style.filter = null;
    modalOn = false;
    console.log(modalOn);
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