$(function() {
  $('#log-meal-button').click(function(e) {
    e.preventDefault();

    var association = $(this).attr('data-association');
    var template = $('#' + association + '_fields_template').html();
    var regexp = new RegExp('new_' + association, 'g');
    var new_id = new Date().getTime();

    $(this).prev().append(template.replace(regexp, new_id))
    //$(this).parent().before(template.replace(regexp, new_id));
    return false;
  });

  $('#log-tags-add-button').click(function(e) {
    e.preventDefault();

    var association = $(this).attr('data-association');

    var $template = $('#' + association + '_template');
    $template.children().children().children('.tag-neutral').html($('#txt_tag').val());

$template.children().children().children('#user_tags_new_tags_name').prop('value', $('#txt_tag').val());

    var template_html = $template.html();
    var regexp = new RegExp('new_' + association, 'g');
    var new_id = new Date().getTime();
    
    var $hidden_add_tag_button = $('#' + $('#hidden_add_tag_button_id').val());

    if ($hidden_add_tag_button)
      $hidden_add_tag_button.prev().append(template_html.replace(regexp, new_id));
      
    $('#log-tags-add').modal('hide');
    return false;
  });

  $('#log-tags-new-button').click(function(e) {
    e.preventDefault();
    $('#txt_tag').val('');
    $('#log-tags-add').modal('toggle');
    $('#hidden_add_tag_button_id').val($(this).prop('id'));

    return false;
  });

  $(document).on('click', 'form a.remove_child', function() {
    //$("#remove_link_id").val($(this).prop('id'));
    
    $("#remove_hidden_id").val($(this).prev('input[type=hidden]')[0].id);
    return false;
  });

  $('#log-meal-remove-take').click(function(){
    /*var $remove_link =  $('#' + $("#remove_link_id").val());

    var hidden_field = $remove_link.prev('input[type=hidden]')[0];
    if(hidden_field) {
      hidden_field.value = '1';
    }*/

    var $remove_hidden =  $('#' + $("#remove_hidden_id").val());
    if($remove_hidden)
      $remove_hidden.val('1'); 

    $remove_hidden.parent().parent().parent().hide();
    $('#log-meal-remove-popup').modal('hide'); 
    //$(this).parents('.fields').hide();

   });



  $(document).on('click', 'form a.remove_tag', function() {
    //$("#remove_link_id").val($(this).prop('id'));
    
    $("#remove_hidden_tag_id").val($(this).prev('input[type=hidden]')[0].id);
    return false;
  });

  $('#log-tag-remove-take').click(function(){
    var $remove_hidden =  $('#' + $("#remove_hidden_tag_id").val());
    if($remove_hidden)
      $remove_hidden.val('1'); 

    $remove_hidden.prev().prev()[0].checked = false; 
    $remove_hidden.parent().parent().hide();
    $('#log-tag-remove-popup').modal('hide'); 
    //$(this).parents('.fields').hide();

   });

  $('#log-date-picker .days div').click(function() {
    var dt = new Date($(this)[0].getAttribute('date'));
    
    var parser = document.createElement('a');
    parser.href = document.URL;
    parser.pathname = parser.pathname.replace('new', 'edit');
    var month = dt.getMonth() + 1;
    parser.search = '?logged_date=' + dt.getFullYear() + '-' + month + '-' + dt.getDate(); 

    window.location.href = parser.href; 
  });

  $('#log-date-button').datepicker().on('changeDate', function(e){
    var parser = document.createElement('a');
    parser.href = document.URL;
    parser.pathname = parser.pathname.replace('new', 'edit');
    parser.search = '?logged_date=' + e.format('yyyy-mm-dd');
    
    window.location.href = parser.href; 
  });

  $("form:first").submit(function() {
    $('#meals_fields_template :input').prop("disabled", true);
    $('#tags_template :input').prop("disabled", true);
  });

  $('[rel=tooltip]').tooltip(); 
});


