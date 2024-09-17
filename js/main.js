// Mengubah teks pada button add form berdasarkan checked pada input
document
  .getElementById('bookFormIsComplete')
  .addEventListener('change', function (e) {
    const shelf = document.querySelector('[data-shelf]');

    if (e.target.checked === true) {
      shelf.textContent = 'Selesai dibaca';
    } else {
      shelf.textContent = 'Belum selesai dibaca';
    }
  });
