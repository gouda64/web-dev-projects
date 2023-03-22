let library = [];

if (window.localStorage.getItem("library") !== null && window.localStorage.getItem("library") !== "") {
  library = JSON.parse(window.localStorage.getItem("library"));
  
  library.forEach((book, index) => {
    addBookNode(book.author, book.title, book.pages, book.read, index);
  });
}

const addButton = document.querySelector(".content > input[type='button']");

const modal = document.querySelector(".modal");
const titleIn = modal.querySelector("#title");
const authorIn = modal.querySelector("#author");
const pagesIn = modal.querySelector("#num-pages");
const readIn = modal.querySelector("#read");

function openModal() {
  modal.style.display = 'initial';
  document.querySelector("#page-mask").style.display = "initial";
  titleIn.select();

  document.addEventListener("onkeydown", submitForm);
}
function closeModal() {
  modal.style.display = "none";
  document.querySelector("#page-mask").style.display = "none";
  modal.querySelector("form").reset();

  document.removeEventListener("onkeydown", submitForm);
}

function checkDuplicate() {
  if (library.some(e => e.title === titleIn.value && e.author === authorIn.value && e.pages === pagesIn.value)) {
    titleIn.setCustomValidity("This book already exists in your library");
    return true;
  }
  else {
    titleIn.setCustomValidity("");
    return false;
  }
}

function submitForm(event) {
  if (event.keyCode=="13") {
    if (!checkDuplicate()) {
      modal.querySelector("form").submit();
    }
  }
}

addButton.onclick = () => {
  openModal();
}
document.querySelector(".modal form > button").onclick = (event) => {
  checkDuplicate();
}
titleIn.oninput = checkDuplicate;
authorIn.oninput = checkDuplicate;
pagesIn.oninput = checkDuplicate;


window.onclick = (event) => {
  if (!modal.contains(event.target) && event.target !== addButton) {
    closeModal();
  }
}

document.querySelector(".modal form").onsubmit = (event) => {
  event.preventDefault();

  addBookToLibrary(authorIn.value, titleIn.value, pagesIn.value, readIn.checked);
  closeModal();
}


function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  const newBook = new Book(author, title, pages, read);
  library.push(newBook);

  addBookNode(author, title, pages, read, library.length-1);
  window.localStorage.setItem("library", JSON.stringify(library));
}

function addBookNode(author, title, pages, read, index) {
  const bookClone = document.querySelector(".books .template").cloneNode(true);
  bookClone.classList.remove("template");
  bookClone.querySelector(".title").textContent = '"' + title + '"';
  bookClone.querySelector(".author").textContent = "by " + author;
  bookClone.querySelector(".pages").textContent = pages + " page" + (pages > 1 ? "s" : "");

  if (read) {
    bookClone.classList.add("read");
    bookClone.querySelector(".ufinish").value = "Unfinish";
  }

  bookClone.querySelector(".options .remove").onclick = (event) => {
    const remInd = Array.from(document.querySelectorAll(".books .book"))
                  .indexOf(event.target.parentNode.parentNode);
    document.querySelector(`.books`).removeChild(
      document.querySelectorAll(`.books .book`)[remInd]);
    
    library.splice(library.length - remInd, 1);

    window.localStorage.setItem("library", JSON.stringify(library));
  }

  bookClone.querySelector(".options .ufinish").onclick = (event) => {
    toggleFinish(Array.from(document.querySelectorAll(".books .book"))
    .indexOf(event.target.parentNode.parentNode));
  }

  document.querySelector(".template").after(bookClone);
}

function toggleFinish(index) {
  const target = document.querySelectorAll(`.books .book`)[index];
  if (library[library.length - index].read) {
    library[library.length - index].read = false;
    target.classList.remove("read");
    target.querySelector(`.options .ufinish`).value = "Finish";
  }
  else {
    library[library.length - index].read = true;
    target.classList.add("read");
    target.querySelector(`.options .ufinish`).value = "Unfinish";
  }
}