var toggleBtn = document.querySelector('#toggle-btn')

toggleBtn.addEventListener('click',function(){
    let toggleMenu = document.querySelector('.toggle-menu');
    if(document.querySelector('.active-toggle-menu')){
        toggleMenu.classList.remove('active-toggle-menu');
    }
    else{
        toggleMenu.classList.add('active-toggle-menu');
    }
})