const openBtn = document.querySelector('.button');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', show);
openBtn.addEventListener('click', show);

function show(){
    if (container.classList.contains('open')){
        container.classList.remove('open')
    }
    else{
        container.classList.add('open');
    }
    console.log("button clicked");
}

