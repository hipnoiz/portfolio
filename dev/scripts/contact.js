$('#contact-form').on('submit', function(){
    sendContact();
});

$('#contact-form button').on('click', function(){
    sendContact();
});


function sendContact(){
    var name = $('#contact-form #name').val(), email = $('#contact-form #email').val(), text = $('#contact-form #text').val();
    var msg = $('#contact-form-msg');

    $.ajax({
        url: "Ajax/SendContact/",
        type: "post",
        data: {
            'name': name,
            'email': email,
            'text': text
        },
        beforeSend : function (){
            msg.show().html('<img src="/static/img/loader.gif" alt="Ładowanie" />');
        },
        success: function(data){
            var obj = jQuery.parseJSON(data);
            if(obj.type == 1){
                msg.html(obj.text);
            }
            else if(obj.type == 0)
                msg.html(obj.text);
            else
                msg.html('Wystąpił błąd, przepraszamy.');
        }
    });
}