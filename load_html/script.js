$(document).ready(function () {
    
    $('#btn-container').on('click', 'button', function(){
        $.ajax('result.html').done(function(response){
            $('#result').html(response);
        })
    })

});