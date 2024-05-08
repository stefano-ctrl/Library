const myLibrary = [];






function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}


function toggleRead(index) {
    myLibrary[index].toggleRead();
    loopBooks();
}





// need to understand how to set up function through books and how for each shouuld be implemented 
function loopBooks() {
    let library = document.querySelector(".container");
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let displayBook = document.createElement("div");
        displayBook.setAttribute("class", "card");
        displayBook.innerHTML = `
             <div class="card-header">
                <h3 class="title-css">${book.title}</h3>
                <h4 class="author-css">by ${book.author}</h4>
             </div>
             <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                
            </div> 
            `;
        library.appendChild(displayBook);
        console.log(library);
        console.log(displayBook);
    }


}

function removeBook(index) {
    myLibrary.splice(index, 1);
    loopBooks()
  }



function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    loopBooks();

};

const closeFormBtn = document.querySelector(".close-button");
closeFormBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "none"; 
});







const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener("click", function () {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})



document.querySelector("#new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
})



/* find out how to implement checkbox to prototype and integrate it to all books. Also keep working on modal and create form for when creating new book */

// every checkbox value seems to be linked to each other. Needs to find a place where to store each individual value 

//dynamicall set check box to be set   --> maybe use loop to create all checkboxes, empty array and with each loop new checkbox is created uniquely