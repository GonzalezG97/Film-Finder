// Getting a handle on the api keys
var tmdbKey = 'cae9a497d1eb142f3801452347747341';

var nyKey = 'TTYU09cHbS77MqlmFfWwC8unridSAyP2';

// Empty array for wathlist
var watchList = [];

// Retriving data from local storage
var retrievedData = localStorage.getItem('Watchlist');           
$('#savedMovies').append(retrievedData);


$(document).ready(function(){  
    $('.genreMovie').click(
        function(event){

    // Grabbing the user choice via ID
    var userChoice = event.target.id
    
    // API Call
    $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${tmdbKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${userChoice}`          
    }).then(
        function(response){
        var genre = response.results;
        // console.log(genre);

        $('#displayDiv').empty();

        
            // For loop to load api and create elements
        for (var i = 0; i < genre.length; i++ ){
            const {title, overview} = genre[i];  
                   
            // console.log(genre[i]);
           let moviesSelection = $(`<card>`);
           
           moviesSelection.addClass(`movieListItem`);           

           moviesSelection.append(`<h1 id='titleLoad'>${title}</h1>`);

           moviesSelection.append(`<button id='reviewBtn' data-title='${genre[i].title}'>Review</button>`);

           moviesSelection.append(`<p id='overLoad'>${overview}</p>`);

           moviesSelection.append(`<button class='saveBtn' data-title='${genre[i].title}'>Save to Watchlist</button>`);

           moviesSelection.appendTo('#displayDiv');

              
           
        };
        
        // Function to save to wathlist and local storage
        $('.saveBtn').click(function(){
            let data = $(this).data();
           $(`<p>${JSON.stringify(data).slice()}</p>`).appendTo('#savedMovies');
           watchList.push(`${JSON.stringify(data).slice()}`);
           localStorage.setItem('Watchlist', watchList); 
           
        });
        
        
        $('#reviewBtn').click(function(){
            var movieTitle = $(this).attr('data-title')

            $.ajax({
            url: `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${movieTitle}&api-key=${nyKey}`
        }).then(
            function(response){
           console.log(response.results)
            })
            
            console.log(movieTitle);
            });
        
            
            
            
        });

    });



});

