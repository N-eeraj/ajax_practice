$(document).ready(function () {
    
    $('#btn-container').on('click', 'button', () => {
        $.ajax('result.html',{
        beforeSend: () => $('#result').html('Loading...')
        })
        .done(response => $('#result').html(response));
    })

});