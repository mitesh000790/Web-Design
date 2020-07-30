$( ".switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( ".switch" ).text( "OFF" );
        $( "body" ).removeClass( "dark" );
    
    } else {
        $( ".switch" ).text( "ON" );
        $( "body" ).addClass( "dark" );     
    }
});