const books = [];

function addBook(event) {
    event.preventDefault();
    const id = document.getElementById('book-id').value;
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    books.push({ id, title, author });
    document.querySelector('form').reset();
    displayBooks();
    alert('Book added successfully!');
}

function displayBooks() {
    const tableBody = document.querySelector('#book-table tbody');
    tableBody.innerHTML = '';
    books.forEach(book => {
        const row = `<tr><td>${book.id}</td><td>${book.title}</td><td>${book.author}</td></tr>`;
        tableBody.innerHTML += row;
    });
}

function searchBook(event) {
    event.preventDefault();
    const id = document.getElementById('search-id').value;
    const book = books.find(book => book.id === id);

    const result = book ? `Book found: Title: ${book.title}, Author: ${book.author}` : 'Book not found.';
    document.getElementById('search-result').textContent = result;
}

function deleteBook(event) {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;
    const index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        books.splice(index, 1);
        displayBooks();
        document.getElementById('delete-result').textContent = 'Book deleted successfully!';
    } else {
        document.getElementById('delete-result').textContent = 'Book not found.';
    }
}
