$(document).ready(function () {
    var el = $('.label-row');
    var elTableWizard = $(".table-wizard-container");
    var tab = $('.tabs-app-container ul li');
    var firstTab = $('.tabs-app-container ul li:nth-child(1)');
    var secondTab = $('.tabs-app-container ul li:nth-child(2)');
    var labelTop = el.offset().top;



    window.resizeTable = function(){
        console.log('content dimension changed');
        var el = $('.label-row');
        var elHeight = el.outerHeight();
        var labelBottom = el.offset().top + el.outerHeight(true);

        console.log("elHeightChanged - " + elHeight);

        if (elHeight <= '21') { // visivbe padding
            el.css({
                "padding": "0",
                "border": "0"
            });
            elTableWizard.css("top", labelBottom - 20 + "px"); // - "padding": "10px 0"
        } else {
            el.css({
                "padding": "10px 0",
                "border-bottom": "1px solid #ddd"
            });
            elTableWizard.css("top", labelBottom + "px");
        }
    };

return;

  /*tab.on('click', function () {
    if ( secondTab.hasClass('active')) {
      elTableWizard.css("top", labelTop + "px");
    } else {
      var el = $('.label-row');
      if(el.is(":visible")) {
        var labelBottom = el.offset().top + el.outerHeight(true);
        elTableWizard.css("top", labelBottom + "px");
        console.log('dgsg');
        new ResizeSensor( el, function(){
          console.log('content dimension changed');
          var el = $('.label-row');
          var elHeight = el.outerHeight();
          var labelBottom = el.offset().top + el.outerHeight(true);

          console.log("elHeightChanged - " + elHeight);

          if (elHeight <= '21') {
            el.css({
              "padding": "0",
              "border": "0"
            });
            elTableWizard.css("top", labelBottom + "px");
          } else {
            el.css({
              "padding": "10px 0",
              "border-bottom": "1px solid #ddd"
            });
            elTableWizard.css("top", labelBottom + "px");
          }
        });
        var elHeight = $('.label-row').outerHeight();
        if (elHeight <= '21') { // visivbe padding
          el.css({
            "padding": "0",
            "border": "0"
          });
          elTableWizard.css("top", labelBottom + "px");
        }
      }
    }
  });*/
});
