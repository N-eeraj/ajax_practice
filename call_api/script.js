$(document).ready(function () {
    
    getMovie('Shang Chi');

});

function getTitle(e){
    let title = e.target.value.trim();
    if(title != '')
        getMovie(title);
}

const getMovie = title => {
        $.ajax(`https://www.omdbapi.com/?t=${title}&apikey=a6326b75`)
        .done(response => {
            if(response.Response == "False")
                return alert("Sorry Couldn't Find the Movie you were looking for")
            let src = response.Poster;
            if(src == 'N/A')
                src = 'https://eapp.org/wp-content/uploads/2018/05/poster_placeholder.jpg';
            $('img').attr('src', src);
            $('header').text(response.Title);
            $("article span:contains('Genre: ') span").text(response.Genre);
            $("article span:contains('Relased: ') span").text(response.Relased);
            $("article span:contains('Rated: ') span").text(response.Rated);
            $("article span:contains('Runtime: ') span").text(response.Runtime);
            $("article span:contains('Director: ') span").text(response.Director);
            $("article span:contains('Writer: ') span").text(response.Writer);
            $("article span:contains('Actors: ') span").text(response.Actors);
            $("article p").text(response.Plot);
        })
}