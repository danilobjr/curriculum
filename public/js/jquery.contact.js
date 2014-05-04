'use strict';

(function($) {

  $(function () {
    var messages = {};

    if (window.locale === 'pt-br') {
      messages = $.validate.messages.ptBr;
    } else {
      messages = $.validate.messages.en;
    }

    $('#cform').validate({
      rules: {
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true
        }
      },
      messages: messages,
      submitHandler: function(form) {
        $(form).submit(function (e) {
          e.preventDefault();

          var action = $(this).attr('action');

          $("#notification").slideUp(750,function() {
            $('#notification').hide();

            $('#submit')
              .before('<img src="images/ajax-loader.gif" class="contact-loader" />')
              .attr('disabled','disabled');

            var post = $.post(action, {
              name: $('#name').val(),
              email: $('#email').val(),
              message: $('#message').val(),
            });

            post.done(function (data) {
              $('#notification').html(data.message).slideDown('slow').delay(4500).slideUp('slow', function (e) {
                console.log($(e.currentTarget));
                $(e.currentTarget).hide();
              });
              // document.getElementById('notification').innerHTML = data.message;
              // $('#notification').slideDown('slow');
              $('#cform img.contact-loader').fadeOut('slow', function() { $(this).remove() });
              $('#submit').removeAttr('disabled');
              $('#cform').slideUp('slow').delay(5000).slideDown('slow');
              console.log(data);
            });

            post.fail(function (data) {
              console.log(data);
            });
          });
        });
      }
    });
  });
}(jQuery));
