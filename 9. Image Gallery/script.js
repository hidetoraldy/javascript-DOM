const container = document.querySelector('.container');
const big = document.querySelector('.big');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className == 'thumb'){
        big.src = e.target.src;
        big.classList.add('fade');

        setTimeout(function(){
            big.classList.remove('fade');
        }, 500)

        thumbs.forEach(function(thumb){
            // if(thumb.classList.contains('active')){
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        })

        e.target.classList.add('active');

    }
})