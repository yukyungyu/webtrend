$(document).ready(function() {
  /* HeaderChange */
  $(window).scroll(function() {
    //y2k
    let sec1Top = $("#y2k").offset().top; 
    let sec1Bottom = sec1Top + $("#y2k").height(); 
    //typo
    let sec2Top = $("#typo").offset().top; 
    let sec2Bottom = sec2Top + $("#typo").height();
    //neo
    let sec3Top = $("#neo").offset().top; 
    let sec3Bottom = sec3Top + $("#neo").height();
    //darkmode
    let sec4Top = $("#darkmode").offset().top; 
    let sec4Bottom = sec4Top + $("#darkmode").height();

    //y2k
    if($(this).scrollTop() > sec1Top && $(this).scrollTop() < sec1Bottom) {
      $('#pc-header, #mo-header').addClass('y2k');
      $('#pc-header, #mo-header').removeClass('typo');
      $('#pc-header, #mo-header').removeClass('neo');
      $('#pc-header, #mo-header').removeClass('darkmode');
    } //big typo
    else if($(this).scrollTop() > sec2Top && $(this).scrollTop() < sec2Bottom) {
      $('#pc-header, #mo-header').addClass('typo');
      $('#pc-header, #mo-header').removeClass('y2k');
      $('#pc-header, #mo-header').removeClass('neo');
      $('#pc-header, #mo-header').removeClass('darkmode');
    } //neo-brutalism
    else if($(this).scrollTop() > sec3Top && $(this).scrollTop() < sec3Bottom) {
      $('#pc-header, #mo-header').addClass('neo');
      $('#pc-header, #mo-header').removeClass('y2k');
      $('#pc-header, #mo-header').removeClass('typo');
      $('#pc-header, #mo-header').removeClass('darkmode');
    } //darkmode
    else if($(this).scrollTop() > sec4Top && $(this).scrollTop() < sec4Bottom) {
      $('#pc-header, #mo-header').addClass('darkmode');
      $('#pc-header, #mo-header').removeClass('y2k');
      $('#pc-header, #mo-header').removeClass('neo');
      $('#pc-header, #mo-header').removeClass('typo');
    } // 그 외
    else {
      $('#pc-header, #mo-header').removeClass('y2k');
      $('#pc-header, #mo-header').removeClass('typo');
      $('#pc-header, #mo-header').removeClass('neo');
      $('#pc-header, #mo-header').removeClass('typo');
    }
  });

  //다크모드 toggle 
  $('.toggle').click(function() { /* light로 전환 */
    $('.toggle').toggleClass('active');
    $('.toggleBtn').toggleClass('active');
    $('#darkmode').toggleClass('active');
    $('.inner-04 div.box').toggleClass('active');
  });


  /* 모바일용 메뉴버튼_________ */
  $(".mo_view").css({"right":"-60%"}); /* 처음위치 */
  $(".close").hide();
  $(".mo_menu_btn").click(function(){
    $(".mo_view").stop(true, true).animate({"right":"0"});
    $(".close").show();
  });
  $(".close").click(function(){
    $(".mo_view").stop(true, true).animate({"right":"-60%"});
    $(".close").hide();
  });
 

});