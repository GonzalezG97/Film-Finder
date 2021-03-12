var tmdbKey = 'cae9a497d1eb142f3801452347747341';

var nyKey = 'TTYU09cHbS77MqlmFfWwC8unridSAyP2';


$(document).ready(function(){$(document).click(function(event){
    
    var userChoice = event.target.id
    console.log(userChoice);
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${userChoice}`          
    }).then(function(response){
        var genre = response.results;
        console.log(genre);
        $.each(genre, function(index, movies){
            
            const { title, overview} = movies;
            
            $('#displayDiv').append('<section>' + title + '</section>' + '<div>' + overview + '<br>' + '<button>' + 'Save' + '</button>' +'</div>' + '<br>');

            
        });
        
        
    });
    

})});

