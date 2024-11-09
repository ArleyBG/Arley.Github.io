document.addEventListener('scroll', function() {
    var section = document.querySelector('section');
    var sectionPosition = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3
    if (sectionPosition < screenPosition) {
        section.classList.add('slide-up');
        section.classList.remove('hidden');
    } else {
        section.classList.remove('slide-up');
        section.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const menuList = document.querySelector('.menu-list');
        menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
    });
});