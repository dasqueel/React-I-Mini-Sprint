// Import React from react.
import React from 'react';

// Create a const arrow function called MoviesList.
const MoviesList = () => {
	return (
		<ul>
			{this.movies.map((movie, i) => {
				<li attribute='{i}'>{movie}</li>
			})}
		</ul>
	);
}
  // Return an unordered list
    // Inside the unordered list, embed a javascript expression (curly brackets).
      // Inside the javascript expression, map the movies array
        // The function inside map should take in two arguments, movie and i (for index).
        // The function should return a list item, with a javascript expression movie (the same variable as map).
        // The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.