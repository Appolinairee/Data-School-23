var menuBtn = document.querySelector('.menuBtn');
var menuLinks = document.querySelector('.menuLinks');
var overflow = document.querySelector('.overflow');
var menuStatus = 0;

function remove() {
    overflow.classList.remove('overflowActive');
    menuStatus = 0;
    menuBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    menuLinks.classList.remove('menuActive');
}

menuBtn.addEventListener('click', () => {
    if (!menuStatus) {
        menuLinks.classList.add('menuActive');
        overflow.classList.add('overflowActive');
        menuBtn.innerHTML = "<i class='fa-solid fa-times'></i>";
        menuStatus =1;
    }
    else{
        remove();
    }

    console.log(menuLinks)
});


overflow.addEventListener('click', () => {
    remove();
});