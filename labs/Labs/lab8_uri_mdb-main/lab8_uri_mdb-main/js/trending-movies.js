/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var favorite_movies = ["frozen","Silent Hill","Grown ups"];
var movieImg =["img/Frozen.jpg","img/Silent.jpg","img/Grownups.jpg"];
//var movieLink = [frozen.html,SilentHill.html,GrownUps.hmtl]
var movie_rating = ["4","3","5"];




/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/
var movieCards  = document.querySelectorAll('.movie-card');
for (let i = 0; i < movieCards.length; i++){
    var movieImage = movieCards[i].querySelector('.movie-image');
    var movieurl = movieCards[i].querySelector('.movie-link');
	var movieRate = movieCards[i].querySelector(".rating");
    movieImage.src = movieImg[i];
    movieImage.alt = favorite_movies[i] + " Movie Poster"
    movieurl.textContent = favorite_movies[i];
    movieurl.href = movieImg[i];

	if(i == 0){
		movieRate.textContent = "★ ★ ★ ★☆ "
	}
	else if (i == 1){
        movieRate.textContent = "★ ★ ★ ☆☆ "
    }
    else {
        movieRate.textContent = "★ ★ ★ ★☆ "
    }
}

