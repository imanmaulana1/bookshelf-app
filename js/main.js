import {
  addBook,
  moveBook,
  deleteBook,
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

  addBook();
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

// Submit add form
document.getElementById('bookForm').addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', () => {
  updateBookList();
});
