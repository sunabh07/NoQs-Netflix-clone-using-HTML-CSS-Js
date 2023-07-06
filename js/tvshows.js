document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'ebfe39af';
    const movieLists = [
      { id: 'movies-list1' },
      { id: 'movies-list2' },
      { id: 'movies-list3' },
      { id: 'movies-list4' }
    ];
  
    function fetchRandomMovies(movieList) {
      const listElement = document.getElementById(movieList.id);
  
      fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=random`)
        .then(response => response.json())
        .then(data => {
          const numMoviesToShow = 6;
          const randomMovies = getRandomMovies(data.Search, numMoviesToShow);
          renderMovieList(listElement, randomMovies);
        })
        .catch(error => {
          console.log('Error fetching movies:', error);
        });
    }
  
    function renderMovieList(listElement, movies) {
      listElement.innerHTML = '';
  
      movies.forEach(movie => {
        const card = createMovieCard(movie);
        listElement.appendChild(card);
      });
    }
  
    function createMovieCard(movie) {
      const card = document.createElement('div');
      card.classList.add('movie-card');
  
      const img = document.createElement('img');
      img.src = movie.Poster;
      img.alt = movie.Title;
  
      const title = movie.Title;
    //   title.textContent = movie.Title;
  
      const form = document.createElement('form');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const movieName = movie.Title;
        const formData = new FormData(this);
        formData.append('moviename', movieName);
  
        fetch('https://script.google.com/macros/s/AKfycbwMG_2faCo0SrDxV2nhfgjnym-aACCyLpY4G-AQVgRBHrhCtjGfu5lzWJWRZfmEz2WT/exec', {
          method: 'POST',
          body: formData
        })
          .then(res => res.text())
          .then(data => console.log(data))
          .catch(error => console.log('Error submitting form:', error));
      });
  
      const submitBtn = document.createElement('input');
      submitBtn.type = 'submit';
      submitBtn.value = 'My List';
      submitBtn.style.padding= '2px 2px';
      submitBtn.style.fontSize='14px';
      submitBtn.style.backgroundColor='pink';
  
      form.appendChild(submitBtn);
  
      card.appendChild(img);
    //   card.appendChild(title);
      card.appendChild(form);
  
      return card;
    }
  
    function getRandomMovies(arr, numMovies) {
      const shuffled = arr.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, numMovies);
    }
  
    movieLists.forEach(movieList => {
      fetchRandomMovies(movieList);
    });
  });
  