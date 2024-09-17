export function addBook() {
  const title = document.getElementById('bookFormTitle').value;
  const author = document.getElementById('bookFormAuthor').value;
  const year = document.getElementById('bookFormYear').value;
  const isComplete = document.getElementById('bookFormIsComplete').checked;

  const newBook = {
    id: new Date().getTime(),
    title,
    author,
    year: parseInt(year),
    isComplete,
  };

  let books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));

  updateBookList();
  document.getElementById('bookForm').reset();
}

// Memperbarui list buku yang dirender
export function updateBookList(filteredBooks = null) {
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  const books =
    filteredBooks || JSON.parse(localStorage.getItem('books')) || [];

  books.forEach((book) => {
    const bookElement = createBookElement(book);
    if (book.isComplete) {
      completeBookList.appendChild(bookElement);
    } else {
      incompleteBookList.appendChild(bookElement);
    }
  });
}

function createBookElement(book) {
  const bookItem = document.createElement('div');
  bookItem.setAttribute('data-bookid', book.id);
  bookItem.setAttribute('data-testid', 'bookItem');
  bookItem.classList.add('bookItem');

  bookItem.innerHTML = `
                  <h3 data-testid="bookItemTitle">${book.title}</h3>
                  <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
                  <p data-testid="bookItemYear">Tahun: ${book.year}</p>
                  <div class="btn-group">
                    <button data-testid="bookItemIsCompleteButton">${
                      book.isComplete
                        ? 'Belum selesai dibaca'
                        : 'Selesai dibaca'
                    }</button>
                    <button data-testid="bookItemDeleteButton">
                      <span class="material-symbols-outlined">delete</span>
                      <span>Hapus Buku</span>
                    </button>
                    <button data-testid="bookItemEditButton">
                      <span class="material-symbols-outlined">edit</span>
                      <span>Edit Buku</span>
                    </button>
                  </div>
                `;

  return bookItem;
}
