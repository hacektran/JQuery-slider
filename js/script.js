$('document').ready(function(){

    var speed = 500; //fade speed
    var autospeed = 5000; // the speed of autoswithcing slides

    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();


    $('#next').on('click',nextSlide);
    $('#prev').on('click',prevSlide);

    //autoswitching slides
    setInterval(nextSlide,autospeed);

    //next slide function
    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){ //if last slide --> back to the first slide
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    //previous slide function
    function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active')
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }





});