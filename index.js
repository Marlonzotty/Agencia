$(document).ready(function(){
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toogle');
    });

    $(window).on('scroll load', function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toogle');
    });
 // aqui embaixo faz a horas aumentarem ate chegar no momento 
    $('.count').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({countNum : $this.text()}).animate({
            countNum : countTo
        },
        {
            duration:5000,
            step : function(){
                $this.text(Math.floor(this.countNum));
            },
            complete :function(){
                $this.text(this.countNum + '+');
            }
        }

        )
    });

    $('.project').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

});
