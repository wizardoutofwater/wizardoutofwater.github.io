$(document).ready(function(){
    console.log('Ready!');
    
  
    // const saveToWatchlist = (imdbID) => {
    //     console.log('save to watchlist');
    //     console.log(imdbID);
    // };
    $('#movie-results').on('click', '.addBtn', function(){
        console.log('add to watchlist');
    });
    
$('#searchButton').click(function (event) {
  event.preventDefault();
  let $searchString = $("#search-bar").val();
  console.log('button clicked.');
  console.log($searchString)

  const $movieResults = $('#movie-results');
  const $jumboTron = $('.jumbotron');

  $.get(`https://www.omdbapi.com/?apikey=9c815c55&s=${$searchString}`).done(function(response){
    console.log(response);
    renderMovies(response.Search);
  });

  const renderMovies = (movieArray) => {
    $jumboTron.css("display","none")
    $movieResults.html('');
   
    movieArray.map((movie) => {
      $movieResults.append(
      `<div class="col-md-4">
       <div class="card mb-4 box-shadow">
          <img class="card-img-top" src="${movie.Poster}"
              alt="movie poster">
          <div class="card-body">
              <p>
                  <div class="lead movie-title">${movie.Title}</div>
                  <div class=" text-muted movie-release">${movie.Year}</div>
              </p>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <a role="button" class="btn btn-sm btn-outline-secondary" href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">View</a>
                      <button  type="button" class="btn btn-sm btn-outline-secondary addBtn">Add</button>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
      `)
    })
  }
});


});


