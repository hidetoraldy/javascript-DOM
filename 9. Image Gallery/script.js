const container = document.querySelector('.container');
const big = document.querySelector('.big');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        big.src = e.target.src;
    }
})