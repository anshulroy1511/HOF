const books = [
    { title: "Book1", author: "john doe", year: 2011 },
    { title: "Book2", author: "jane smith", year: 2005 },
    { title: "Book3", author: "adam black", year: 2020 }
];
const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));
console.log(filteredBooks);
