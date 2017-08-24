$(document).ready(function () {
  var el = $('.label-row');
  var elTableWizard = $(".table-wizard-container");
  var labelBottom = el.offset().top + el.outerHeight(true);
  console.log("labelBottom - "+labelBottom);

  new ResizeSensor( el, function(){
    console.log('content dimension changed');
  });
});