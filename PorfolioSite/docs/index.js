
const togglebtn = document.querySelector('.toggle_btn');
        const togglebtnicon = document.querySelector('.toggle_btn i');
        const dropdownmenu = document.querySelector('.dropdown_menu');

        togglebtn.onclick = function () { // Corrected 'onclik' to 'onclick'
            dropdownmenu.classList.toggle('open');
            const isopen = dropdownmenu.classList.contains('open');

            togglebtnicon.classList = isopen
                ? 'fa-solid fa-xmark' // Changed to 'fa-xmark' for the close icon
                : 'fa-solid fa-bars'; // Default icon for the hamburger menu
        };


// home scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-home').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#section-child').offset().top
        }, 1000); // 1000 ms = 1 second
    });
});

// about scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-about').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#sec2-head').offset().top
        }, 1000); // 1000 ms = 1 second
    });
});

// project scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-project').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#section-3').offset().top
        }, 1000); // 1000 ms = 1 second
    });
});

// skills scroll

$(document).ready(function() {
    // Scroll down animation on button click
    $('.scroll-btn-skill').click(function() {
        // Scroll to the second section (you can change the ID to any section you want)
        $('html, body').animate({
            scrollTop: $('#skills-section').offset().top
        }, 1000); // 1000 ms = 1 second
    });
});