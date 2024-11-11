let books = [
    { title: "Organic Chemistry", author: "Paula Y. Bruice", yearPublished: 2016, category: "Chemistry" },
    { title: "Inorganic Chemistry", author: "Gary L. Miessler", yearPublished: 2013, category: "Chemistry" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", yearPublished: 2008, category: "Coding" },
    { title: "Python Crash Course", author: "Eric Matthes", yearPublished: 2015, category: "Coding" }
];

// Step 2: Function to add a new book to the array
function addBook(newBook) {
    books.push(newBook);
}

// Step 3: Function to list all books and their details
function listBooks() {
    console.log("Favorite Books:");
    books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}, Category: ${book.category}`);
    });
}

// Adding a few books
addBook({ title: "Physical Chemistry", author: "Peter Atkins", yearPublished: 2014, category: "Chemistry" });
addBook({ title: "Clean Code", author: "Robert C. Martin", yearPublished: 2008, category: "Coding" });

// Listing all books
listBooks();