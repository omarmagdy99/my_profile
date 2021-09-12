// $(window).on('laod',function(){
// })
$(document).ready(function () {
    
    $('.laoding').hide(1000);
    // --------------------------------typing------------


    var typed = new Typed('.simpleUsage', {
        strings: ["HI, I AM <h1 class='d-inline'>OMAR MAGDY</h1>", "I AM A WEB DEVELOPER", 'I HAVE 0 YEARS EXPERIENCE', 'I AM VERY HARD WORKER'],
        typeSpeed: 70,
        backSpeed: 30,
        loop: true
    });
    $('nav  a').click(function(e){
        e.preventDefault();
        console.log($('#'+$(this).data('scroll')).offset().top)
        $('html,body').animate({
            scrollTop : $('#'+ $(this).data('scroll')).offset().top
        },2000)
    })




    //screen------------

    $(window).on('resize', function () {

        if ($(window).width() < 960) {
            $('nav').addClass('navbar-shrink');
        }
        else {
            $('nav').removeClass('navbar-shrink');
        }
    })

    // scroll---------------
    $(window).scroll(function () {


        if ($(this).scrollTop() >= 190) {
            $('nav').addClass('navbar-shrink');
            $('nav').removeClass('py-4');

        }
        else {
            $('nav').removeClass('navbar-shrink');
            $('nav').addClass('py-4');

        }
        if ($(window).width() < 960) {
            $('nav').addClass('navbar-shrink');
        }


        // a active
        // about
        if (($(this).scrollTop() >= $('#sec2-me').offset().top) && ($(this).scrollTop() <= $('#sec3-skill').offset().top)) {
            $('.about').addClass('active-color')
        } else {
            $('.about').removeClass('active-color')
        }
        // slills
        if (($(this).scrollTop() >= $('#sec3-skill').offset().top) && ($(this).scrollTop() <= $('#sec4-services').offset().top)) {
            $('.skills').addClass('active-color')
        } else {
            $('.skills').removeClass('active-color')
        }
        // services
        if (($(this).scrollTop() >= $('#sec4-services').offset().top) && ($(this).scrollTop() <= $('#sec5-port').offset().top)) {
            $('.services').addClass('active-color')
        } else {
            $('.services').removeClass('active-color')
        }
        // portfolio
        if (($(this).scrollTop() >= $('#sec5-port').offset().top) && ($(this).scrollTop() <= $('#foot-contact').offset().top)) {
            $('.portfolio').addClass('active-color')
        } else {
            $('.portfolio').removeClass('active-color')
        }
        // contact
        if ($(this).scrollTop() >= $('#foot-contact').offset().top) {
            $('.contact').addClass('active-color')
        } else {
            $('.contact').removeClass('active-color')
        }
        // button top
        if ($(this).scrollTop() >= 100) {
            $('.btn-top').css('bottom', '40px');
        }
        else {
            $('.btn-top').css('bottom', '-85px');

        }





    })
    // click scroll
    // home
    $('.home').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    })
    // // about
    // $('.about').click(function () {
    //     $('body,html').animate({ scrollTop: 710 }, 1000);
    // })
    // // skills
    // $('.skills').click(function () {
    //     $('body,html').animate({ scrollTop: 1450 }, 1000);
    // })
    // // services
    // $('.services').click(function () {
    //     $('html,body').animate({ scrollTop: 2800 }, 1000);
    // })
    // // portfolio
    // $('.portfolio').click(function () {
    //     $('html,body').animate({ scrollTop: 3400 }, 1000);
    // })
    // // contact
    // $('.contact').click(function () {
    //     $('html,body').animate({ scrollTop: 4570 }, 1000);
    // })


    $(function () {

        $('.example-popover').popover({
            trigger: 'hover'
            , content: 'copy to clipboard'
        })
    })




    // copy key
    var clipboard = new ClipboardJS('.btn-copy');

    clipboard.on('success', function (e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
    // $(function () {

    //     $('.example-popover').popover('toggleEnabled')
    // })
    // $('.example-popover').on(' hidden.bs.popover', function () {
    // })
})
