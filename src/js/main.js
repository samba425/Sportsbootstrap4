$(function() {
  // Auto play modal video
  $(".video").click(function () {
    var theModal = $(this).data("target"),
    videoSRC = $(this).attr("data-video"),
    videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


$('.slider').slick({
  infinite:true,
  slideToShow: 1,
  slideToScroll:1
});

$(document).ready(function () {
    $('.sidenavbar ul li:first').addClass('active');
    $('.tab-content:not(:first)').hide();
    $('.sidenavbar ul li a').click(function (event) {
        event.preventDefault();
        var content = $(this).attr('href');
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(content).show();
        $(content).siblings('.tab-content').hide();
    });
});

function myFunction(e,n) { 
  console.log("email",e.value)
  console.log("number",e);

setTimeout(function() {
  document.getElementById("myForm").reset();  
  location.reload();
},3000)
  

}