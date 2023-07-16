//get all books
const fs = require('fs');

function getAllBooks(callback) {
  fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    try {
      const books = JSON.parse(data);
      callback(null, books);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
}

// Usage example
getAllBooks((error, books) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Books:', books);
});


//search by isbn 
const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);

function searchBookByISBN(isbn) {
  return readFileAsync('books.json', 'utf8')
    .then(data => {
      const books = JSON.parse(data);
      const foundBook = books.find(book => book.isbn === isbn);
      if (foundBook) {
        return foundBook;
      } else {
        throw new Error('Book not found.');
      }
    });
}

// Usage example
const isbnToSearch = '1234567890';
searchBookByISBN(isbnToSearch)
  .then(book => {
    console.log('Book found:', book);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //search by author

  const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

function searchBooksByAuthor(author) {
  return readFile('books.json', 'utf8')
    .then(data => {
      const books = JSON.parse(data);
      const foundBooks = books.filter(book => book.author === author);
      if (foundBooks.length > 0) {
        return foundBooks;
      } else {
        throw new Error('No books found by the author.');
      }
    });
}

// Usage example
const authorToSearch = 'J.K. Rowling';
searchBooksByAuthor(authorToSearch)
  .then(books => {
    console.log('Books found:', books);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //search by title

  const fs = require('fs');
const { promisify } = require('util');

const readFiletitle = promisify(fs.readFile);

function searchBooksByTitle(title) {
  return readFiletitle('books.json', 'utf8')
    .then(data => {
      const books = JSON.parse(data);
      const foundBooks = books.filter(book => book.title === title);
      if (foundBooks.length > 0) {
        return foundBooks;
      } else {
        throw new Error('No books found with the given title.');
      }
    });
}

// Usage example
const titleToSearch = 'The Catcher in the Rye';
searchBooksByTitle(titleToSearch)
  .then(books => {
    console.log('Books found:', books);
  })
  .catch(error => {
    console.error('Error:', error);
  });
