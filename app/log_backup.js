
$(document).ready(function() {  
  $('#log-meal-button').click(function(event) {
    event.preventDefault();

    var index = $('.log-meal.controls').length;

    var $newLogMeal = $('<div class="log-meal controls" id="logMeal' + index + '" data-id="1381803857377">'
                      + '<div class="log-meal-side">'
                      +   '<select name="meal-1381803857377_when" class="log-meal-when span2">'
                      +   '</select>'
                      +   '<div class="log-meal-remove-button">'
                      +     '<a data-id="1381803857377" href="javascript:void(0);" tabindex="-1" data-toggle="modal" data-target="#log-meal-remove-popup">Remove</a>'
                      +   '</div>'
                      + '</div>'
                      + '<button class="log-meal-photo-button btn btn-small" type="button" data-id="1381803857377" tabindex="-1" data-toggle="modal" data-target="#log-meal-photo-picker">'
                      +   '<img src="img/camerabutton.png" data-id="1381803857377" data-propkey="mealsById.1381803857377.photoUrl" data-noreplace="img/camerabutton.png">'
                      + '</button>'
                      + '<textarea name="meal-1381803857377_what" class="log-meal-what" tabindex="2" data-propkey="mealsById.1381803857377.what"></textarea>'
                      + '</div>');


    $('#log-meals-list').after($newLogMeal);


    /*var $newLi = $('<li class="special">special and new <button>I am new</button></li>');
    var $tgt = $(event.target);
    if ($tgt.is('button')) {
      $tgt.parent().after($newLi);
    }
 
    // next 2 lines show that you've clicked on the ul
    var bgc = $(this).css('backgroundColor');
    $(this).css({backgroundColor: bgc == '#ffcccc' || bgc == 'rgb(255, 204, 204)' ? '#ccccff' : '#ffcccc'});*/
  });
});
