const content = document.querySelectorAll('.content');

for (let i=0;i<content.length; i++){
    content[i].addEventListener('click', function () {

        this.classList.toggle('active');
    })
}