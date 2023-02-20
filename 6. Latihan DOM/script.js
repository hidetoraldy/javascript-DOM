const tombol = document.getElementById('tombol');

tombol.onclick = function(){
    document.body.classList.toggle('hijau-muda');
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

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + red + ','  + green + ',' + blue +')';
})
sHijau.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + red + ','  + green + ',' + blue +')';
})
sBiru.addEventListener('input', function(){
    const red = sMerah.value;
    const green = sHijau.value;
    const blue = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + red + ','  + green + ',' + blue +')';
})

