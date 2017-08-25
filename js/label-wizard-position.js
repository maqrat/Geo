$(document).ready(function () {
    var el = $('.label-row');
    var elTableWizard = $(".table-wizard-container");
    var tab = $('.tabs-app-container ul li');
    var secondTab = $('.tabs-app-container ul li:nth-child(2)');
    var labelTop = el.offset().top;
    var btnPrice = $('.btn-price');

    function tableWizardTopSet() {
        var labelBottom = el.offset().top + el.outerHeight(true);
        elTableWizard.css("top", labelBottom + "px");
        console.log('labelBottom' + labelBottom);

    }

    window.resizeTable = function(){
        console.log('content dimension changed');

        var el = $('.label-row');
        var elHeight = el.outerHeight();

        if (elHeight <= '21') { // visivbe padding, left when  no labels into the row
            el.css({
                "padding": "0",
                "border": "0"
            });
            tableWizardTopSet();
        } else {
            el.css({
                "padding": "10px 0",
                "border-bottom": "1px solid #ddd"
            });
            tableWizardTopSet();
        }
    };



  tab.on('click', function () {
    if ( secondTab.hasClass('active')) {
      elTableWizard.css("top", labelTop + "px");
    } else {
        tableWizardTopSet();
    }
  });



    btnPrice.on('click', function () {
        console.log('btnPrice clicked');
        var wizardTableRow = $('.table-wizard td');
        if ( !(wizardTableRow.hasClass('selected')) ) {
           console.log("!(wizardTableRow.hasClass('selected')");
            resizeTable();
            /*tableWizardTopSet();*/
        }
    });
});
