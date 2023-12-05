const myLibrary = [];
const bookCard = document.querySelector('.card');
const bookTitle = document.querySelector('.title-sec');
const bookAuthor = document.querySelector('.author-sec'); 
const bookPages = document.querySelector('.pages-sec');
const bookInfo = document.querySelector('.info-sec');


function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages, 
    this.read = read; 

}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

let bookOne = new Book('Walden', 'Henry David Thoureau', 198, 'loved the nature and freedom of the character');
let bookTwo = new Book('Family Happiness', 'Leo Tolstoy', 220, 'taught me how important being around people is')

/*
function addBookToLibrary(book) {
       myLibrary.push(book);
       return myLibrary.forEach((book) => ); /* return function that create a card with all details of the book. Should this function have some common details and therefore you can create an example before or should it create p and divs from scratch all the time 
}; */


function addBookToLibrary(book) {
    myLibrary.push(book);
    return myLibrary.forEach((book) => 
       bookTitle.textContent = book.title,
       bookAuthor.textContent = book.author,
       bookPages.textContent = book.pages,
       bookInfo.textContent = book.info()); 

};

addBookToLibrary(bookOne); 
