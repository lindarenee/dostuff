

$( function() {
    
/*$("#datepicker2").blur(function(){
    $(".new-events").addClass("hidden");
});*/

$("#datepicker2").change(function(){
    $(".new-events").addClass("hidden");

});

$("#slider-range").mouseup(function(){
    $(".no-checkins").addClass("hidden");

});


    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  } );


$( function() {
    var fixmeTop = $('.fixme').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%'

        });
        $('.inner-filter').addClass('scroll');
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'static',
            width: 'auto'
        });
        $('.inner-filter').removeClass('scroll');
    }

});
    $( "#datepicker" ).datepicker();
    $( "#datepicker2" ).datepicker();
  } );

$(function() {
  $('.sortbyselect').SumoSelect({
    placeholder: 'Sort by'
  });
  $('.filter-select').SumoSelect({
    captionFormatAllSelected: '5 selected'
  });

  $('.delete-btn').click(function(){
     $('.stuff-list-main-ctr').addClass('hidden');
     $('.no-results').removeClass('hidden');
   
    $('.undo-delete-ctr').removeClass('hidden');
    $('.select-all-ctr').toggleClass('hidden');
    $('#checkall').prop('checked', false);
    $('.select-all-ctr').toggleClass('hidden');


    

  });
  $('#undo').click(function(){
    $('.undo-delete-ctr').addClass('hidden');
    $('.stuff-list-main-ctr').removeClass('hidden');
    $('.no-results').addClass('hidden');
  });
    
  
});

function toggle(source) {
  checkboxes = document.getElementsByClassName('stuff-item');
  for(var i=0, n=checkboxes.length;i<n;i++) {
    checkboxes[i].checked = source.checked;
  }
  $('.select-all-ctr').toggleClass('hidden');
}