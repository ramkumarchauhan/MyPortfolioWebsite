$(function () {
    $("#menu-icon").on('click', function () {
        $(".navlist").toggleClass("open");
        $("#menu-icon").toggleClass("rotate");
    });

    const filterBtn = $('.portfolio-filters li');
    filterBtn.on('mouseenter', function () {
        filterBtn.removeClass('filter-active');
        $(this).addClass('filter-active');
    });


    let filterItems = mixitup('.portfolio-wrap-container', {
        selectors: {
            target: '.portfolio-item'
        },
        animation: {
            duration: 250
        }
    });

    $(window).scroll(function () {
        const scrollY = $(window).scrollTop();

        $('section[id]').each(function () {
            const current = $(this);
            const sectionHeight = current.outerHeight();
            const sectionTop = current.offset().top - 50;
            const sectionId = current.attr('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                $('.navlist a[href*=' + sectionId + ']').addClass('active');
            } else {
                $('.navlist a[href*=' + sectionId + ']').removeClass('active');
            }
        });
    });
});