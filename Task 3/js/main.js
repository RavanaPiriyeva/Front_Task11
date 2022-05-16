let menuItems = document.querySelectorAll('#tab-menu .menu-item');
let menuText = document.querySelectorAll('.all-menu .menu-text');

menuItems.forEach(elem=>{
    elem.addEventListener('click',function(){
        let currentActiveItem = document.querySelector('.active-menu-item');
        let currentActiveText = document.querySelector('.active-menu-text');
        // currentActiveItem.className = 'menu-item';
        currentActiveItem.classList.remove('active-menu-item');
        currentActiveText.classList.remove('active-menu-text');
        
        
        this.classList.add('active-menu-item')
        this.classList.add('active-menu-text')
    })
})