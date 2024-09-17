import {
  addBook,
  moveBook,
  deleteBook,
  editBook,
  updateBookList,
} from './bookFunctions.js';

function toggleTextButton(e) {
  const shelf = document.querySelector('[data-shelf]');

  if (e.target.checked === true) {
    shelf.textContent = 'Selesai dibaca';
  } else {
    shelf.textContent = 'Belum selesai dibaca';
  }
}

function handleSubmit(e) {
  e.preventDefault();

  const editingBookId = this.dataset.editingBookId;
  if (editingBookId) {
    editBook(parseInt(editingBookId));
    delete this.dataset.editingBookId;
  } else {
    addBook();
  }
}

// Event listener delete book & move book
document.addEventListener('click', function (e) {
  if (e.target.dataset.testid === 'bookItemIsCompleteButton') {
    const bookId = parseInt(e.target.closest('[data-bookid]').dataset.bookid);
    moveBook(bookId);
  }

  if (e.target.dataset.testid === 'bookItemDeleteButton') {
    const bookId = parseInt(e.target.closest('[data-bookid]').dataset.bookid);
    deleteBook(bookId);
  }
});

// Mengubah teks pada button add form berdasarkan checked pada input
document
  .getElementById('bookFormIsComplete')
  .addEventListener('change', toggleTextButton);

// Submit add / edit form
document.getElementById('bookForm').addEventListener('submit', handleSubmit);

// Submit search form
document.getElementById('searchBook').addEventListener('submit', function (e) {
  e.preventDefault();

  const searchValue = document
    .getElementById('searchBookTitle')
    .value.toLowerCase();

  const books = JSON.parse(localStorage.getItem('books')) || [];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue)
  );

  updateBookList(filteredBooks);
});

document.addEventListener('DOMContentLoaded', () => {
  updateBookList();
});
