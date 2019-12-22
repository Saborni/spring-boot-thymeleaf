jQuery(document).ready(function($){




	/************** Scroll Navigation *********************/
	$('.navigation').singlePageNav({
        currentClass : 'active'
    });


	/************** FlexSlider *********************/
    $('.flexslider').flexslider({
	    animation: "fade",
	    directionNav: false
	});


    /************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
    });

	$('#addBook').click(()=>alert("To add"));
	$('#viewBook').click(()=>alert("To view"));
	$('#modifyBook').click(()=>alert("To modify"));
	$('#deleteBook').click(()=>alert("To delete"));

});