/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var myMovie = ["Grown Ups","img/Grownups.jpg","4","The death of their childhood basketball coach leads to a reunion for some old friends (Adam Sandler, Kevin James, Chris Rock), who gather at the site of a championship celebration years earlier. Picking up where they left off, the buddies -- with wives and children in tow -- discover why age does not, necessarily, equal maturity."];

var moreInfo =  document.querySelector('.movie-info');


var title = moreInfo.querySelector('.movie-image');
title.src = myMovie[1];
title.alt = myMovie[0];


moreInfo.querySelector('.movie-name').textContent = myMovie[0];
moreInfo.querySelector('.description').textContent = myMovie[3];
moreInfo.querySelector('.rating').textContent =  "★ ★ ★ ★ ☆ ";
moreInfo.querySelector('.rating').dataRating = 4;

