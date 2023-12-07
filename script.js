const myLibrary = [];
const mainContainer = document.querySelector('.container');

const bookAuthor = document.querySelector('.author-sec'); 
const bookPages = document.querySelector('.pages-sec');
const bookInfo = document.querySelector('.info-sec');


function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = `${pages} pages`, 
    this.read = read; 

}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}

let bookOne = new Book('Walden', 'Henry David Thoureau', 198, 'loved the nature and freedom of the character');
let bookTwo = new Book('Family Happiness', 'Leo Tolstoy', 220, 'taught me how important being around people is');
let bookThree = new Book('White Nights', 'Fyodor Dostoevsky', 276, 'read long time ago. About being a dreamful young'); 




function addBookToLibrary(book) {
       return myLibrary.push(book);
 
};
    // need to understand how to set up function through books and how for each shouuld be implemented 
function loopBooks(arr) {
    arr.forEach((book) => {

    let bookCard = document.createElement('div');
       let bookTitle = document.createElement('h3');
       let bookAuthor = document.createElement('h4');
       let bookPages = document.createElement('p'); 
       let bookInfo = document.createElement('p');
       bookCard.classList.add('card');
       mainContainer.appendChild(bookCard);
       bookCard.appendChild(bookTitle);
       bookCard.appendChild(bookAuthor);
       bookCard.appendChild(bookPages);

       bookCard.appendChild(bookInfo); 
       bookTitle.textContent = book.title;
       bookAuthor.textContent = book.author; 
       bookPages.textContent = book.pages;
       bookInfo.textContent = book.info(); 

             
    })
}

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree); 



console.log(myLibrary);

loopBooks(myLibrary); 


