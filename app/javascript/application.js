import './components/app';

jQuery.each( [ "put", "delete" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

$(function(){
  // always pass csrf tokens on ajax calls
  $.ajaxSetup({
    headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') }
  });
});



  // delete entries 'by click' function
$("#todo_lists-show .delete_entry").click(function(){
  const todoListId = $('.todo_list').data('id')
  const entryId    = $(this).data('entry-id')

  if (confirm('Do you REALLY want to destroy this entry?')) {
    $.delete(`/todo_lists/${todoListId}/entries/${entryId}.json`, (data) => {
      if(data.success) {
        //location.reload();
        $(this).closest(".list_list").hide();
      }
    })
  }
});

  // search function
$(document).ready(function(){
  // Pour chaque entrée dans la zone de texte .inputEntry
  $(".input_entry").on("input", function() {
    // la variable value vaut la valeur de la saisie dans la zone de texte en LowerCase
    var search = $(this).val().toLowerCase()

    $(".list_list .list_title").each(function() {
      const title                   = $(this).text().toLowerCase().trim()
      const searchIsIncludedInTitle = title.indexOf(search) > -1

      $(this).parent().toggle(searchIsIncludedInTitle)
    });

    const itemsAreVisible = $(".list_list .list_title:visible").length
    const inputIsEmpty    = !$(".input_entry").val().length

    if (itemsAreVisible || inputIsEmpty) {
      $(".not_found").hide();
    } else {
      $(".not_found").show();
    }

    // si la boucle ne retourne pas de résultat
    // alors afficher paragraphe


  });
});











