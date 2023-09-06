$(document).ready(function(){

  //1)Disable right click menu in html page using jquery.
  $(document).bind("contextmenu",function(e){
    return false;
  });
  //end

  //2)Disable the submit button until the visitor has clicked a check box.
  $('#accept').click(function() {
  	if ($('#submitbtn').is(':disabled')) {
      	$('#submitbtn').removeAttr('disabled');
      } else {
      	$('#submitbtn').attr('disabled', 'disabled');
      }
  });
  //end

  //3)Blink text using jQuery.
  function blink_text() {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
  }
  setInterval(blink_text, 1000);
  //end

  //4)Print a page using jQuery.
  $('a.printPage').click(function(){
     window.print();
     return false;
  });
  //end

  //5)Limit character input in the textarea including count.
  let maxLength = 15;
  $('textarea').keyup(function() {
    let textlen = maxLength - $(this).val().length;
    $('#rchars').text(textlen);
  });
  //end

  //6) Select values from a JSON object using jQuery.
  colors = { "color1": "Red", "color2": "Green", 'color3': "Blue" };
  $.each(colors, function(key, value) {
      $('#divSelect').append($("<option/>", {
          value: key,
          text: value
      }));
  });
  //end

  //7) How to get the value of a textbox using jQuery
  $( "#get_value" )
    .keyup(function() {
      let tvalue = $( this ).val();
      $("#input_val").text(tvalue);
      console.log(tvalue);
    })
  .keyup();
  //end

  //8)Distinguish between left and right mouse click with jQuery.
  $(document).on("contextmenu", ".element", function(e){
   $("#left_or_right").html("Right Mouse Clicked!");
   return false;
  });

  $(document).on('click', '.element', function(){
   $("#left_or_right").html("Left Mouse Clicked!");
  });
  //end

  //9)Count number of rows and columns in a table using jQuery.
  $.fn.rowCount = function() {
      return $('tr', $(this).find('tbody')).length;
  };

  $.fn.columnCount = function() {
      return $('th', $(this).find('tbody')).length;
  };
  let rowctr = $('#table1').rowCount();
  let colctr = $('#table1').columnCount();

  $("#rows_count").text("Rows: " + rowctr);
  $("#columns_count").text("Columns: " + colctr);
  //end

  // 10) Remove a specific value from an array using jQuery.
  let y = ['Red', 'Green', 'White', 'Black', 'Yellow'];
  let remove_Item = y[3];

  $("#array_before_removing").text("Array before removing the element =  " + y);

  y = $.grep(y, function(value) {
    return value != remove_Item;
  });
  $("#array_after_removing").text("Array before removing the element =  " + y);
  //end

  //11)Attaches a change event to the select element (Use to create a drop-down list.) that gets the text for each selected option and writes them in a paragraph.
  let callbacks = $.Callbacks();

  $( "select" )
  .change(function () {
  let str = "";
  $( "select option:selected" ).each(function() {
  str += $( this ).text() + " ";
  });
  $( "#selected_value" ).text("Selected Colors: "+str) .css( "color", "blue" );
  })
  .change();
  //end

  //12)Finds all elements that are checked or selected.
  let count_Checked = function() {
  let n = $( ".task_12_form input:checked" ).length;
  $( "#checked_count" ).text( n + (n === 1 ? " is" : " are") + " checked." );
  };
  count_Checked();
  $("input[type=checkbox]" ).on( "click", count_Checked );
  //end

  //13)Finds the checked radio input.
  $( ".task_14_form input" ).on( "click", function() {
    $( "#radio_val" ).html( $( "input:checked" ).val() + " is checked!" );
  });
  //end

  //14)Display the mouse position relative to the left and top edges of the document
  $( document ).on( "mousemove", function( event ) {
    $( "#position" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });
  //end

  //15)Scroll to the top of the page with jQuery.
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  //end

});
