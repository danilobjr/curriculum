'use strict';

(function($) {

  $(function(){
  	$('#cform').submit(function(){

  		var action = $(this).attr('action');

  		$("#notification").slideUp(750,function() {
    		$('#notification').hide();

     		$('#submit')
    			.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
    			.attr('disabled','disabled');

    		$.post(action, {
    			name: $('#name').val(),
    			email: $('#email').val(),
    			message: $('#message').val(),
    		},
    			function(data){
    				document.getElementById('notification').innerHTML = data.message;
    				$('#notification').slideDown('slow');
    				$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
    				$('#submit').removeAttr('disabled');
    				if(data.success) $('#cform').slideUp('slow');
            console.log(data);
    			}
    		);
  		});

  		return false;
  	});
  });

}(jQuery));
