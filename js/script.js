document.addEventListener('DOMContentLoaded', function() {
    const mobMenuButton = document.querySelector('.mob-menu-button');
    const mobNavMenu = document.querySelector('.mob-nav-menu');
    const overlay = document.querySelector('.overlay'); // Добавил точку перед overlay для корректного выбора элемента

    mobMenuButton.addEventListener('click', function() {
        mobNavMenu.classList.toggle('active');
        mobMenuButton.classList.toggle('active');

        if (mobMenuButton.classList.contains('active')) {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        mobNavMenu.classList.remove('active');
        mobMenuButton.classList.remove('active');
    });
});

document.querySelector('.order-button').addEventListener('click', function() {
    document.querySelector('.product-form').scrollIntoView({ 
        behavior: 'smooth' 
    });
});