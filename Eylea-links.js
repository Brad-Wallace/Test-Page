/*  Brad Wallace
	brad.wallace.13@gmail.com
	374 Grant ave
	11/6/2014
	*/

$( document ).ready(function() {
	console.log( "document loaded" );
	$('.dialogB').hide();

	$('a').click(function(){
		$('.dialogB').show();
    	$('.interior').html($(this).text());
    	console.log($(this).text());
    	$('.overlay').addClass("cover");
	});

	$('.hide').click(function(){
		$('.dialogB').hide();		
    	$('.overlay').removeClass("cover");
	});

});
 
$( window ).load(function() {
	console.log( "window loaded" );
});