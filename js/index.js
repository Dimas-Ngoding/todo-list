const tempat = document.querySelector('.row .col-6'); // Container
const input = document.querySelector('.input-group .form-control'); // Buat Keyboard

const btnAdd = document.querySelector('.input-group-append button') // Tombol Add
  .addEventListener('click', function() {
    let value = document.querySelector('.input-group .form-control').value;
    if (value !== '') {
      tempat.innerHTML += /*html*/ `
      <div class="isi-note">
        <p>${value}</p>
        <button class="btn btn-danger btn-sm">Delete</button>
      </div>`;
    }
    document.querySelector('.input-group .form-control').value = '';

    const paragraph = document.querySelectorAll('.row p');
    for (let i = 0; i < paragraph.length; i++) {
      paragraph[i].addEventListener('mouseover', function() {
        paragraph[i].style.color = '#54e346';
        paragraph[i].addEventListener('mouseout', function() {
          paragraph[i].style.color = 'black';
        });
      });

      paragraph[i].addEventListener('click', function() {
        paragraph[i].classList.toggle('coret');
        paragraph[i].parentElement.classList.toggle('warna');
      });
    } 
    // const checkedBtn = document.querySelectorAll('.row #cekIsi'); // Tombol Coret // for (let i = 0; i < checkedBtn.length; i++) { //   checkedBtn[i].addEventListener('click', function() { //     checkedBtn[i].nextElementSibling.classList.toggle('coret'); //   }); // }

    const delBtn = document.querySelectorAll('.row .btn-danger'); // Tombol Delete
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener('click', function() {
        delBtn[i].parentElement.style.display = 'none';
      });
    }
  });

input.addEventListener("keyup", function(event) { // Pake enter
  if (event.keyCode === 13) { // Key 13 = tombol enter
    event.preventDefault();
    let value = document.querySelector('.input-group .form-control').value;
    if (value !== '') {
      tempat.innerHTML += /*html*/ `
      <div class="isi-note">
        <p>${value}</p>
        <button class="btn btn-danger btn-sm">Delete</button>
      </div>`;
    }
    document.querySelector('.input-group .form-control').value = '';

    const paragraph = document.querySelectorAll('.row p');
    for (let i = 0; i < paragraph.length; i++) {
      paragraph[i].addEventListener('mouseover', function() {
        paragraph[i].style.color = '#54e346';
        paragraph[i].addEventListener('mouseout', function() {
          paragraph[i].style.color = 'black';
        });
      });

      paragraph[i].addEventListener('click', function() {
        paragraph[i].classList.toggle('coret');
        paragraph[i].parentElement.classList.toggle('warna');
      });
    }
    // const checkedBtn = document.querySelectorAll('.row #cekIsi'); // Tombol Coret // for (let i = 0; i < checkedBtn.length; i++) { //   checkedBtn[i].addEventListener('click', function() { //     checkedBtn[i].nextElementSibling.classList.toggle('coret'); //   }); // }

    const delBtn = document.querySelectorAll('.row .btn-danger'); // Tombol Delete
    for (let i = 0; i < delBtn.length; i++) {
      delBtn[i].addEventListener('click', function() {
        delBtn[i].parentElement.style.display = 'none';
      });
    }
  }
});

