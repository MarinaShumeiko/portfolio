$(document).ready(function() {
  $(".ga-modal-trigger").click(function(e){
    e.preventDefault();
    dataModal = $(this).attr("data-modal");
    $("#" + dataModal).css({"display":"block"});
    // $("body").css({"overflow-y": "hidden"}); //Prevent double scrollbar.
  });

  $(".ga-close-modal, .ga-modal-sandbox").click(function(){
    $(".ga-modal").css({"display":"none"});
    // $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
  });
});