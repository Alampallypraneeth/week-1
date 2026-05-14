//Library Book Management System
//Create a Book class and use it to manage a collection of books in a library.
//requirements: Create a Book class with the following:
//Properties:title (string)author (string)pages (number)isAvailable (boolean, default: true)
//Methods:borrow() - Marks the book as not availablereturnBook() - Marks the book as availablegetInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")isLongBook() - Returns true if pages > 300, false otherwise
//creating 5 book objects using the class
//example:"harry potter","1984","the hobbit","the legend","tomorrow",etc.   
class Book {
    constructor(title, author, pages, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }
    
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is not available.`);
        }
    }
    
    returnBook() {
        this.isAvailable = true;
        console.log(`You have returned "${this.title}".`);
    }
    
    getInfo() {
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    
    isLongBook() {
        return this.pages > 300;
    }
}

// Creating book objects
const book1 = new Book("Harry Potter", "J.K. Rowling", 350);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("The Legend", "Shiva", 250);
const book5 = new Book("Tomorrow", "John Doe", 150);
// Managing the collection
const library = [book1, book2, book3, book4, book5];

//display info of all books
library.forEach(book => {
    console.log(book.getInfo());
});
//borrow 2 books and show availability
book1.borrow();
book3.borrow();
console.log(`Is "${book1.title}" available?`, book1.isAvailable);
console.log(`Is "${book3.title}" available?`, book3.isAvailable);
//return 1 book and show availability
book1.returnBook();
console.log(`Is "${book1.title}" available?`, book1.isAvailable);
//count number of books that are long books
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("Number of long books (>300 pages):", longBooksCount);
//list all the available books
const availableBooks = library.filter(book => book.isAvailable);
console.log("Available books:");
availableBooks.forEach(book => {
    console.log(book.getInfo());
});