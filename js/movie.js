
document.addEventListener('DOMContentLoaded', function() {
  const movieLists = [
    { id: 'movie-list', apiKey: '45ce326032472781fe08a717313fb5e1' },
    { id: 'movie-list1', apiKey: '45ce326032472781fe08a717313fb5e1' },
    { id: 'movie-list2', apiKey: '45ce326032472781fe08a717313fb5e1'  },
    { id: 'movie-list3', apiKey: '45ce326032472781fe08a717313fb5e1'  }
  ];

  // Function to fetch random movies from TMDb API
  function fetchRandomMovies(movieList) {
    const listElement = document.getElementById(movieList.id);

    // Fetch movies from TMDb API
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${movieList.apiKey}`)
      .then(response => response.json())
      .then(data => {
        const numMoviesToShow = 6; // Number of movies to display
        const randomMovies = getRandomMovies(data.results, numMoviesToShow);

        listElement.innerHTML = '';

        randomMovies.forEach(movie => {
          const card = document.createElement('div');
          card.classList.add('movie-card');

          const img = document.createElement('img');
          img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
          img.alt = movie.title;

          var h = movie.title;
          var form1=document.createElement('form')
          form1.setAttribute("method","POST");
          
          form1.setAttribute("name",movie.title)
          var submitBtn = document.createElement('input');
          submitBtn.setAttribute("type","submit");
          submitBtn.setAttribute("value","My List")
          submitBtn.style.padding='2px 2px';
          submitBtn.style.fontSize='14px';
          submitBtn.style.backgroundColor='pink';
          var movienamebox=document.createElement('input');
          movienamebox.setAttribute("type","hidden");
          movienamebox.setAttribute("name","moviename");
          var movieName=h;
          movienamebox.setAttribute("value",movieName);
          form1.appendChild(movienamebox);
          form1.appendChild(submitBtn);
        
         
          form1.addEventListener('submit', (z) => {
            z.preventDefault();
          
             let formdata= new FormData(form1);
             fetch('https://script.google.com/macros/s/AKfycbwMG_2faCo0SrDxV2nhfgjnym-aACCyLpY4G-AQVgRBHrhCtjGfu5lzWJWRZfmEz2WT/exec',
             {
              method:"POST",
              body:formdata
             })
             .then(res => res.text())
             .then(movieName =>console.log(formdata));
          });

          card.appendChild(img);
          
          card.appendChild(form1);
          listElement.appendChild(card);
        });
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }

  movieLists.forEach(movieList => {
    fetchRandomMovies(movieList);
  });

  
  window.addEventListener('beforeunload', function() {
    movieLists.forEach(movieList => {
      fetchRandomMovies(movieList);
    });
  });

  function getRandomMovies(arr, numMovies) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numMovies);
  }

 

});
