wp.customize( '@setting@', function( value ) {
	value.bind( function( newval ) {
		if ( false == newval ) { newval = ''; } 
		$('@selector@').css( 'background-image' , 'url("' + newval + '")' );
	} );
} );