function getPilihanComputer(){
    const comp = Math.random();

    if (comp < 0.34) return 'kertas';
    if (comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'batu';
}

function getPemenang(comp, pemain){
    if(pemain == comp) return 'SERI!';
    if(pemain == 'kertas') return (comp == 'gunting') ? 'KALAH!' : 'MENANG!';
    if(pemain == 'gunting') return (comp == 'batu') ? 'KALAH!' : 'MENANG!';
    if(pemain == 'batu') return (comp == 'kertas') ? 'KALAH!' : 'MENANG!';
}

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPemain = pKertas.className;
//     const hasil = getPemenang(pilihanComputer, pilihanPemain);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPemain = pGunting.className;
//     const hasil = getPemenang(pilihanComputer, pilihanPemain);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPemain = pBatu.className;
//     const hasil = getPemenang(pilihanComputer, pilihanPemain);

//     const imgComputer = document.querySelector('.img-computer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

function randomizer(){
    const imgComputer = document.querySelector('.img-computer');
    const gambar = ['kertas', 'gunting', 'batu'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.jpg')
        if(i == gambar.length){
            i = 0;
        }
    }, 100)
}

const pilihanSuit = document.querySelectorAll('li img');
pilihanSuit.forEach(function(suit) {
    suit.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPemain = suit.className;
        const hasil = getPemenang(pilihanComputer, pilihanPemain);

        randomizer();

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.jpg');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)

    })
});


