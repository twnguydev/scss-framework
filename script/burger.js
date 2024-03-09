document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuButton = document.querySelector('.toggle-menu-icon');
    const toggleMenu = document.querySelector('.toggle-menu');
    const menuList = document.querySelector('.toggle-menu ul');
    const menuLinks = document.querySelectorAll('.toggle-menu ul li a');
    const mainMenu = document.querySelector('.main-menu');
    const header = document.querySelector('header');
    
    function updateMenuPosition() {
        let headerHeight = header.offsetHeight;
        toggleMenu.style.top = `calc(${headerHeight}px)`;
        toggleMenu.style.height = `calc(100vh - ${headerHeight}px + 10px)`;
    }
    
    updateMenuPosition();
    
    window.addEventListener('resize', updateMenuPosition);
    
    function toggleMenuAnimation() {
        if (toggleMenu.style.display === 'none' || toggleMenu.style.display === '') {
            slideDown();
        } else {
            slideUp();
        }
    }
    
    function slideUp() {
        menuList.style.display = 'none';

        const animation = toggleMenu.animate(
            [{ height: toggleMenu.clientHeight + 'px' }, { height: 0 }],
            { duration: 300, easing: 'ease-out' }
        );
    
        animation.onfinish = function () {
            toggleMenu.style.display = 'none';
        };
    }
    
    function slideDown() {
        toggleMenu.style.display = 'block';

        const animation = toggleMenu.animate(
            [{ height: 0 }, { height: toggleMenu.scrollHeight + 'px' }],
            { duration: 300, easing: 'ease-in' }
        );

        animation.onfinish = function () {
            menuList.style.display = 'block';
        };
    }
    
    toggleMenuButton.addEventListener('click', toggleMenuAnimation);
    
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            slideUp();
        });
    });
    
    function displayBurger() {
        if (window.innerWidth < 879) {
            toggleMenuButton.style.display = 'block';
            mainMenu.style.display = 'none';
        } else {
            toggleMenuButton.style.display = 'none';
            mainMenu.style.display = 'block';
        }
    }
    
    window.addEventListener('resize', function () {
        updateMenuPosition();
        displayBurger();
    });
    
    displayBurger();    
});