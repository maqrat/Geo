$(document).ready(function () {

  //.niceScroll()

  $('.filter-body-1').niceScroll(
    {
      autohidemode: false,
      cursorcolor:"black",
      cursoropacitymax: 0.4,
      cursorwidth:"9px"
    }
  );

  $('.filter-body-2').niceScroll(
    {
      autohidemode: false,
      cursorcolor:"black",
      cursoropacitymax: 0.4,
      cursorwidth:"9px"
    }
  );
  /*$('tbody').niceScroll({
      autohidemode: false,
      cursorcolor:"black",
      cursoropacitymax: 0.4,
      cursorwidth:"9px"
  });*/
  $('.filter-body-1').getNiceScroll().resize();
  $('.filter-body-2').getNiceScroll().resize();
  /*$('tbody').getNiceScroll().resize();*/

});