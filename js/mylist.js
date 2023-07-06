// // document.addEventListener('DOMContentLoaded', function () {
// //   const sheetId = 'AKfycbyVRWtemeaOp74OObhuPPp4ukUQdNtxyzkxqM5kO8H0vWrU1LI3cKXfx_cw66Z2oWGF';
// //   const apiKey = 'AIzaSyD1aYY8kHZwAHr8htffHbAf7Q5uNCoaI2E';

// //   // Fetch the movie data from Google Sheets
// //   fetchMovieData();

// //   // Function to fetch movie data from Google Sheets
// //   function fetchMovieData() {
// //     fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/mylist?key=${apiKey}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         parseMovieData(data.values);
// //       })
// //       .catch(error => {
// //         console.log('Error fetching movie data:', error);
// //       });
// //   }

// //   // Function to parse movie data and create movie cards
// //   function parseMovieData(movieData) {
// //     const listElement = document.getElementById('My-List');
// //     listElement.innerHTML = '';

// //     movieData.forEach(movie => {
// //       const id = movie[0];
// //       const card = createMovieCard(id);
// //       listElement.appendChild(card);
// //     });
// //   }

// //   // Function to create a movie card
// //   function createMovieCard(id) {
// //     const card = document.createElement('div');
// //     card.classList.add('movie-card');
// //     card.textContent = id;

// //     return card;
// //   }
// // });



// // document.addEventListener('DOMContentLoaded', function () {
// //   const sheetId = 'AKfycbyVRWtemeaOp74OObhuPPp4ukUQdNtxyzkxqM5kO8H0vWrU1LI3cKXfx_cw66Z2oWGF';
// //   const apiKey = 'AIzaSyAEsJZww52bt7pSdxI1TCpW5ETeBc2pVtc';

// //   // Fetch the movie data from Google Sheets
// //   fetchMovieData();

// //   // Function to fetch movie data from Google Sheets
// //   function fetchMovieData() {
// //     fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/mylist?key=${apiKey}`)
// //       .then(response => response.json())
// //       .then(data => {
// //         parseMovieData(data.values);
// //       })
// //       .catch(error => {
// //         console.log('Error fetching movie data:', error);
// //       });
// //   }

// //   // Function to parse movie data and create movie cards
// //   function parseMovieData(movieData) {
// //     const listElement = document.getElementById('My-List');
// //     listElement.innerHTML = '';

// //     if (movieData && movieData.length > 0) {
// //       movieData.forEach(movie => {
// //         const id = movie[0];
// //         const card = createMovieCard(id);
// //         listElement.appendChild(card);
// //       });
// //     }
// //   }

// //   // Function to create a movie card
// //   function createMovieCard(id) {
// //     const card = document.createElement('div');
// //     card.classList.add('movie-card');
// //     card.textContent = id;

// //     return card;
// //   }
// // });


// // Function to parse movie data and create movie cards
// function parseMovieData(movieData) {
//   const listElement = document.getElementById('My-List');
//   listElement.innerHTML = '';

//   if (movieData && movieData.length > 0) {
//     movieData.forEach(movie => {
//       const id = movie[0];
//       fetchMovieDetails(id)
//         .then(movieDetails => {
//           const card = createMovieCard(movieDetails);
//           listElement.appendChild(card);
//         })
//         .catch(error => {
//           console.log('Error fetching movie details:', error);
//         });
//     });
//   }
// }

// // Function to fetch movie details from an external API
// function fetchMovieDetails(movieId) {
//   const apiKey = '45ce326032472781fe08a717313fb5e1';

//   return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       return data;
//     });
// }

// // Function to create a movie card
// function createMovieCard(movie) {
//   const card = document.createElement('div');
//   card.classList.add('movie-card');

//   const title = document.createElement('h3');
//   title.textContent = movie.title;

//   const poster = document.createElement('img');
//   poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//   poster.alt = movie.title;

//   card.appendChild(title);
//   card.appendChild(poster);

//   return card;
// }


// document.addEventListener('DOMContentLoaded', function () {
//   // Google Sheets API URL and Sheet ID
//   const sheetsURL = 'https://docs.google.com/spreadsheets/d/1oLmoYXZ1z-ZZ5C276P1s0NYo41TDPgRpFLF7RWOLcvI/edit#gid=0';
//   const sheetId = 'AKfycbyVRWtemeaOp74OObhuPPp4ukUQdNtxyzkxqM5kO8H0vWrU1LI3cKXfx_cw66Z2oWGF';
  
//   // Function to fetch movie data from Google Sheets
//   function fetchMovieData() {
//     // Fetch movie data from Google Sheets
//     fetch(`${sheetsURL}${sheetId}/values/mylist?key=AIzaSyAEsJZww52bt7pSdxI1TCpW5ETeBc2pVtc`)
//       .then(response => response.json())
//       .then(data => {
//         // Parse the movie data
//         const movies = parseMovieData(data.values);
        
//         // Generate movie cards on the "My List" page
//         generateMovieCards(movies);
//       })
//       .catch(error => {
//         console.log('Error fetching movie data:', error);
//       });
//   }
  
//   // Function to parse movie data from Google Sheets
//   function parseMovieData(values) {
//     // Remove the header row
//     values.shift();
    
//     // Map movie IDs
//     const movieIds = values.map(row => row[0]);
    
//     // Return movie IDs
//     return movieIds;
//   }
  
//   // Function to generate movie cards on the "My List" page
//   function generateMovieCards(movieIds) {
//     const myListContainer = document.getElementById('My-List');
    
//     // Clear the existing movie cards
//     myListContainer.innerHTML = '';
    
//     // Fetch movie details from TMDB API and generate movie cards
//     movieIds.forEach(movieId => {
//       // Fetch movie details from TMDB API
//       fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_TMDB_API_KEY`)
//         .then(response => response.json())
//         .then(movie => {
//           // Create movie card element
//           const card = createMovieCard(movie);
          
//           // Add movie card to the "My List" container
//           myListContainer.appendChild(card);
//         })
//         .catch(error => {
//           console.log('Error fetching movie details:', error);
//         });
//     });
//   }
  
//   // Function to create a movie card element
//   function createMovieCard(movie) {
//     const card = document.createElement('div');
//     card.classList.add('movie-card');
    
//     const img = document.createElement('img');
//     img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
//     img.alt = movie.title;
    
//     const h3 = document.createElement('h3');
//     h3.textContent = movie.title;
    
//     card.appendChild(img);
//     card.appendChild(h3);
    
//     return card;
//   }
  
//   // Fetch movie data from Google Sheets and generate movie cards on page load
//   fetchMovieData();
// });



const sheets = SpreadsheetApp.openByUrl('https://script.google.com/macros/s/AKfycbyVRWtemeaOp74OObhuPPp4ukUQdNtxyzkxqM5kO8H0vWrU1LI3cKXfx_cw66Z2oWGF/exec');
const sheet = sheets.getSheetByName('Sheet1');

function doPost(z) {
  let data1 = z.parameter;
  sheet.appendRow([data1.id]);
}
