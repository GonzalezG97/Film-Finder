var tmdbKey = 'cae9a497d1eb142f3801452347747341';

var nyKey = 'TTYU09cHbS77MqlmFfWwC8unridSAyP2';


$(document).ready(function(){$(document).click(function(event){
    event.preventDefault();
    var userChoice = event.target.id
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${userChoice}`          
    }).then(function(response){
        var movies = response.results;
        console.log(movies);
        $.each(movies, function(index, movie){
            
            const { title, overview} = movie;
            
            $('#watchList').append('<div>' + title + '<br>' + overview + '</div>' + '<br>');
        });
    });
    

})});