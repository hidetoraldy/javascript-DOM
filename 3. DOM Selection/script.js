//! DOM SELECTION
//* document.getElementById() -> hanya bisa menangkap 1 element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'cyan';
judul.innerHTML = 'Yo!';

//* document.getElementsByTagName() -> menangkap banyak element(HTMLCollection)
const p = document.getElementsByTagName('p');
p[1].style.backgroundColor = 'lime';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontStyle = 'italic';

//* document.getElementsByClassName()
// HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'diubah dari javascript';

//* document.querySelector() -> hanya menangkap 1 element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue';
p4.style.fontSize = '20px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

//* document.querySelectorAll()
// NodeList
const pi = document.querySelectorAll('p');
p[2].style.backgroundColor = 'purple';