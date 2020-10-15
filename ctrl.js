$(function() {
    console.log( "ready!" );


    $.getJSON( "data.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      console.log("key: "+key+" , value: "+val)
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });

  });

