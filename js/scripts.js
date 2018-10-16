$(document).ready(function() {
  $('#Term1').click(function(){
    $('.definitions li').removeClass();
    $('#Term1Def').addClass("show");
  });

  $('#Term2').click(function(){
    $('.definitions li').removeClass();
    $('#Term2Def').addClass("show");
  });




  // $("#Term1").click(function() {
  //   console.log('ckiks');
  //   $(".definitions li").removeClass();
  //   $("#Term1Def").addClass(".showclass");
  //   $(".hideclass#Term1Def").toggle();
  // });
  // $("#Term2").click(function() {
  //   $("li.definitions").removeClass();
  //   $("Term2Def").addClass(".showclass");
  //   // $(".hideclass#Term2Def").toggle();
  // });



  // $(".showclass#Term2").click(function() {
  //   $("body").removeClass();
  //   $(".hideclass#Term2Def").toggle();
  // });
});
