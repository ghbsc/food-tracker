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

  $('#tag-save-button').click(function() {
    var str = '{';
    str += '"log": {' ;
    str += '"logged_date": "' + $('#log_logged_date').val() + '", ';
    str += '"section": "tag", ';
    
    if($('.log-tag-field:not(:last)').children().children(':nth-child(1)').is(':checked'))
    {
      str += '"tag_ids": { ';

      $('.log-tag-field:not(:last)').each(function(index, value) {
        var tagCheckbox = $(this).children().children(':nth-child(1)'); 

        if(tagCheckbox.is(':checked'))
        {
          var hashValue = tagCheckbox.prop('value');
          var arr = tagCheckbox.prop('id').split('_');
          var hashIndex = arr[arr.length - 1];

          str += '"' + hashIndex + '": "' + hashValue + '",';   
        }
      });
     
      str = str.slice(0, -1); 
      str += '}';
    }
    str += '}';  //end log

    str += ', "user": { '; 
    str += '"tags": { ';

    $('.log-tag-field:not(:last)').each(function(index, value) {
        var tagCheckbox = $(this).children().children(':nth-child(1)'); 
        var arr = tagCheckbox.prop('id').split('_');
        var hashIndex = arr[arr.length - 1];

        var tagDestroy = $(this).children().children(':nth-child(3)'); 
        var tagName = $(this).children().children(':nth-child(5)'); 
        var tagId = $(this).children().children(':nth-child(6)'); 

        str += '"';
        str +=  hashIndex + '": { ';
        str += '"_destroy": "' + tagDestroy.val() + '", ';

        str += '"name": "' + tagName.val() + '", ';
        str += '"id": "' + tagId.val() + '" }';
        str += ',';
    });

    str = str.slice(0, -1); 
    str += '}';
    str += '}';

    if(is_upate()) 
      str += ',"_method": "put"';
    
    str += '}'; //end root

    $.ajax({
      url: get_url(),
      beforeSend: function( xhr ) {
        $('#tag-save-button').html('Saving...');   
      },
      type: "POST",
      data: $.parseJSON(str),
      dataType: "script"
    });
      /*.done(function(data) {
        $('#tag-save-button').text('Saved!');
        alert('done');
      });*/    
    
    //$.post('/logs/' + $('#log_id').val(), $.parseJSON(str));
      //.done(function( data ) {
        //alert( "Data Loaded: " + data );});
  });

  $('#meal-save-button').click(function() {
    var logged_date = $('#log_logged_date').val();

    $('.log-meal').not(':last').wrapAll('<form accept-charset="UTF-8" action="' + get_url() + '" data-remote="true" id="meal_form" method="post"></form>');
    if(is_upate()) 
      $('#meal_form').append('<input name="_method" type="hidden" value="patch" />');
    
    $('#meal_form').append('<input name="log[logged_date]" type="hidden" value="' + logged_date + '" />');
    $('#meal_form').append('<input name="log[section]" type="hidden" value="meal" />');
    
    $('#meal-save-button').html('Saving...');   
    $('#meal_form').submit(); 
  });

  $('#measurement-save-button').click(function() {
    var logged_date = $('#log_logged_date').val();

    $('.log-measurement').wrapAll('<form accept-charset="UTF-8" action="' + get_url() + '" data-remote="true" id="measurement_form" method="post"></form>');

    if(is_upate()) 
      $('#measurement_form').append('<input name="_method" type="hidden" value="patch" />');
    
    $('#measurement_form').append('<input name="log[logged_date]" type="hidden" value="' + logged_date + '" />');
    $('#measurement_form').append('<input name="log[section]" type="hidden" value="measurement" />');
    
    $('#measurement-save-button').html('Saving...');   
    $('#measurement_form').submit(); 
  });
  
  $('#feat-save-button').click(function() {
    var logged_date = $('#log_logged_date').val();

    $('.feat').wrapAll('<form accept-charset="UTF-8" action="' + get_url() + '" data-remote="true" id="feat_form" method="post"></form>');

    if(is_upate()) 
      $('#feat_form').append('<input name="_method" type="hidden" value="patch" />');
    
    $('#feat_form').append('<input name="log[logged_date]" type="hidden" value="' + logged_date + '" />');
    $('#feat_form').append('<input name="log[section]" type="hidden" value="feat" />');
    
    $('#feat-save-button').html('Saving...');   
    $('#feat_form').submit(); 
  }); 
    
  
  $('#note-save-button').click(function() {
    var logged_date = $('#log_logged_date').val();

    $('#log-notes-field').wrapAll('<form accept-charset="UTF-8" action="' + get_url() + '" data-remote="true" id="note_form" method="post"></form>');

    if(is_upate()) 
      $('#note_form').append('<input name="_method" type="hidden" value="patch" />');
    
    $('#note_form').append('<input name="log[logged_date]" type="hidden" value="' + logged_date + '" />');
    $('#note_form').append('<input name="log[section]" type="hidden" value="note" />');
    
    $('#note-save-button').html('Saving...');   
    $('#note_form').submit(); 
  });

  function get_url()
  {
    var url; 
    if($('#log_id').val() == '')
      url = '/logs';
    else
      url =  '/logs/' + $('#log_id').val();

    return url;
  }

  function is_upate()
  {
    if($('#log_id').val() == '')
      return false; 
    else
      return true; 
  }

  $('#show-other-measurements').click(function() {
    $('.log-measurement:not(:first)').toggle();
    $('#log-measurements-hide-button').toggle();
    $('#log-measurements-show-button').toggle();
  });

  $('#hide-other-measurements').click(function() {
    $('.log-measurement:not(:first)').toggle();
    $('#log-measurements-hide-button').toggle();
    $('#log-measurements-show-button').toggle();
    jQuery('html,body').animate({scrollTop:0},0);
  });

  
  $('#log-measurements-hide-button').hide();
  $('#log-measurements-show-button').show();
  $('.log-measurement:not(:first)').hide();

  $("form:first").submit(function() {
    $('#meals_fields_template :input').prop("disabled", true);
    $('#tags_template :input').prop("disabled", true);
  });

  $('[rel=tooltip]').tooltip();


  /*var dragData = null;
  omnaEl = document.getElementById('target'); 
  $("#target").mousedown(function(ev) {
    if(!dragData) {
      ev=ev||event;
      dragData={
        x: ev.clientX-omnaEl.offsetLeft,
        y: ev.clientY-omnaEl.offsetTop
      };
    }; 
  });

  $("#target").mousemove(function(ev) {
    if(dragData) {
      ev=ev||event;
      omnaEl.style.left=ev.clientX-dragData.x+"px";
      omnaEl.style.top=ev.clientY-dragData.y+"px";
    } 
  });

  $("#target").mouseup(function(ev) {
    if(dragData) {
      ev=ev||event;
      omnaEl.style.left=ev.clientX-dragData.x+"px";
      omnaEl.style.top=ev.clientY-dragData.y+"px";
      dragData=null;
    } 
  });*/

});

