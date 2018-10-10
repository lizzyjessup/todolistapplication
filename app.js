$(function() {

  $(function() {
    //adding new list item on click
    $('#add').click(function() {
     var $input = $('input').val();
      if ($input === ""){
        return 0;
      } else {
        var item = "<li>" + $input + "</li>";
        $('ul').append(item);
        $("input:text").val("I need to...");
    }});

    //adding ability to strike through
    $('body').on('click','li', function() {
      if ($(this).hasClass('done') === true) {
        $(this).removeClass('done');
      } else {
      $(this).addClass('done');
        };
    });

    //clearing everything off list
    $('button').on('click',function() {
      $('ul').empty();
      console.log('your message');
    });

    });
  });
