var tmdbKey = 'cae9a497d1eb142f3801452347747341';

var nyKey = 'TTYU09cHbS77MqlmFfWwC8unridSAyP2';

var watchList = [];

$(document).ready(function(){
    $('.genreMovie').click(
        function(event){
    
    var userChoice = event.target.id
    
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${userChoice}`          
    }).then(
        function(response){
        var genre = response.results;
        console.log(genre);

        $('#displayDiv').empty();

        for (var i = 0; i < genre.length; i++ ){
            const {title, overview} = genre[i];  
                   
            // console.log(genre[i]);
           let moviesSelection = $(`<card>`);
           
           moviesSelection.addClass(`movieListItem`);           

           moviesSelection.append(`<h1 id='titleLoad'>${title}</h1>`);

           moviesSelection.append(`<button id='reviewBtn'>Review</button>`);

           moviesSelection.append(`<p id='overLoad'>${overview}</p>`);

           moviesSelection.append(`<button class='saveBtn' data-title='${genre[i].title}'>Save to Watchlist</button>`);

           moviesSelection.appendTo('#displayDiv');

              
           
        };
        
        
        $('.saveBtn').click(function(){
            let data = $(this).data();
            
           $(`<p>${JSON.stringify(data).slice()}</p>`).appendTo('#savedMovies');
           watchList.push(`${JSON.stringify(data).slice()}`);
           localStorage.setItem('Watchlist', watchList); 
           
        });

        
    });
    
    JSON.parse(localStorage.getItem('Watchlist')).appendTo('#displayDiv');

})});

