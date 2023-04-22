AOS.init();

const height = $('#client').offset().top

$(window).scroll(function(){
    if($(window).scrollTop()> height-400){
        $('#nav').css("backgroundColor", "rgba(0,0,0,0.5)")
    }else{
        $('#nav').css("backgroundColor", "transparent")

    }
})