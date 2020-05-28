(function($){
    var toTop = ($('#sidebar').height() - $(window).height()) + 60;
    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });
    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    // resize
    $(window).resize(function() {
        if($(window).width() > 1200) {
            $('#profile').animate({opacity: 1, right: '0%', display: 'block'}, 0, function() {
                $(this).removeClass('card');
            });
        }else{
            $('#profile').animate({opacity: 0, right: '-100%', display: 'none'}, 0, function() {
                $(this).removeClass('card');
            });
        }
    });

    // Profile card
    $(document).on('click', function () {
        if($(window).width() <= 1200) {
            $('#profile').animate({opacity: 0, right: '-100%', display: 'none'}, 100, function() {
                $(this).removeClass('card');
            });
            $('#container').removeClass('card');
        }
    }).on('click', '#profile-anchor', function (e) {
        e.stopPropagation();
        if($('#profile').hasClass('card')) {
            $('#profile').animate({opacity: 0, right: '-100%', display: 'none'}, 100, function() {
                $(this).removeClass('card');
            });
            $('#container').removeClass('card');
        }else{
            $('#profile').show().addClass('card').animate({opacity: 1, right: 0}, 100);
            $('#container').addClass('card');
        }
    }).on('click', '.profile-inner', function (e) {
        e.stopPropagation();
    });

    // To Top
    if ($('#sidebar').length) {
        $(document).on('scroll', function () {
            if ($(document).width() >= 800) {
                if(($(this).scrollTop() > toTop) && ($(this).scrollTop() > 0)) {
                    $('#toTop').fadeIn();
                    $('#toTop').css('left', $('#sidebar').offset().left);
                } else {
                    $('#toTop').fadeOut();
                }
            } else {
                $('#toTop').fadeIn();
                $('#toTop').css('right', 20);
            }
        }).on('click', '#toTop', function () {
            $('body, html').animate({ scrollTop: 0 }, 600);
        });
    }

})(jQuery);