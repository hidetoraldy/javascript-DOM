const tombol = document.getElementById('tombol');

tombol.onclick = function(){
    document.body.style.backgroundColor = 'darkblue';
}

const tombolRandom = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna!');
tombolRandom.appendChild(teksTombol);
tombolRandom.setAttribute('type', 'button');
tombol.after(tombolRandom);

tombolRandom.addEventListener('click', function(){
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + red + ','  + green + ',' + blue +')';
})