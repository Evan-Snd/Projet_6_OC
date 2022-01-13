
var dataFilm;
var bestRatedFilms = [];
var actionFilms = [];
var horrorFilms = [];
var romanceFilms = [];
var films = {};
var bestRatedFilmIndex = 0;
var actionFilmIndex = 0;
var horrorFilmIndex = 0;
var romanceFilmIndex = 0;


function init_imageBestRatedFilm() {                                   
  fetch("http://localhost:8000/api/v1/titles/8571428")
  .then(response => response.json())
  .then(function(responseJson) {
    testFilms = responseJson;
    update_imageBestRatedFilm(testFilms);
  });
};

function update_imageBestRatedFilm(testFilms) {
  let divImage = document.querySelector("#banniere_image_film");
  let image = `${testFilms.image_url}`;
  let insertionImage = '<img src="'+image+'" />';
  divImage.innerHTML = insertionImage;
};

function init_bestRatedFilms() {
  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.4&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=7&page=1")
  .then(response => response.json())
  .then(function(responseJson) {
    responseResults = responseJson.results;
    responseResults.forEach(dataFilm => {
      films[dataFilm.id] = dataFilm;
      bestRatedFilms.push(dataFilm.id);
    });
    update_bestRatedFilms(films,bestRatedFilmIndex);
  });
};

function update_bestRatedFilms(films, bestRatedFilmIndex) {
  let divImage1 = document.querySelector("#fmn_film1");
  let filmId = bestRatedFilms[bestRatedFilmIndex];
  let image = films[filmId].image_url;
  let insertionImage = '<img src="'+image+'" onclick="init_filmInformations('+filmId+')" />';
  divImage1.innerHTML = insertionImage;

  let divImage2 = document.querySelector("#fmn_film2");
  let filmId2 = bestRatedFilms[bestRatedFilmIndex+1];
  let image2 = films[filmId2].image_url;
  let insertionImage2 = '<img src="'+image2+'" onclick="init_filmInformations('+filmId2+')" />';
  divImage2.innerHTML = insertionImage2;

  let divImage3 = document.querySelector("#fmn_film3");
  let filmId3 = bestRatedFilms[bestRatedFilmIndex+2];
  let image3 = films[filmId3].image_url;
  let insertionImage3 = '<img src="'+image3+'" onclick="init_filmInformations('+filmId3+')" />';
  divImage3.innerHTML = insertionImage3;

  let divImage4 = document.querySelector("#fmn_film4");
  let filmId4 = bestRatedFilms[bestRatedFilmIndex+3];
  let image4 = films[filmId4].image_url;
  let insertionImage4 = '<img src="'+image4+'" onclick="init_filmInformations('+filmId4+')" />';
  divImage4.innerHTML = insertionImage4;
};

function ChangeSlideBrf(sens) {
  bestRatedFilmIndex += sens;
  if (bestRatedFilmIndex > 3) {
    bestRatedFilmIndex = 3;
  update_bestRatedFilms(films, bestRatedFilmIndex);
  }
  else if (bestRatedFilmIndex < 0) {
    bestRatedFilmIndex = 0;
  update_bestRatedFilms(films, bestRatedFilmIndex);
  }
  else {
  update_bestRatedFilms(films, bestRatedFilmIndex);
  }
};

function init_actionFilms() {
  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Action&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=7&page=1")
  .then(response => response.json())
  .then(function(responseJson) {
    responseResults = responseJson.results;
    responseResults.forEach(dataFilm => {
      films[dataFilm.id] = dataFilm;
      actionFilms.push(dataFilm.id);
    });
    update_actionFilms(films, actionFilmIndex);
  });
};

function update_actionFilms(films, actionFilmIndex) {
  let divImage1 = document.querySelector("#cat1_film1");
  let filmId = actionFilms[actionFilmIndex];
  let image = films[filmId].image_url;
  let insertionImage = '<img src="'+image+'" onclick="init_filmInformations('+filmId+')" />';
  divImage1.innerHTML = insertionImage;

  let divImage2 = document.querySelector("#cat1_film2");
  let filmId2 = actionFilms[actionFilmIndex+1];
  let image2 = films[filmId2].image_url;
  let insertionImage2 = '<img src="'+image2+'" onclick="init_filmInformations('+filmId2+')" />';
  divImage2.innerHTML = insertionImage2;

  let divImage3 = document.querySelector("#cat1_film3");
  let filmId3 = actionFilms[actionFilmIndex+2];
  let image3 = films[filmId3].image_url;
  let insertionImage3 = '<img src="'+image3+'" onclick="init_filmInformations('+filmId3+')" />';
  divImage3.innerHTML = insertionImage3;

  let divImage4 = document.querySelector("#cat1_film4");
  let filmId4 = actionFilms[actionFilmIndex+3];
  let image4 = films[filmId4].image_url;
  let insertionImage4 = '<img src="'+image4+'" onclick="init_filmInformations('+filmId4+')" />';
  divImage4.innerHTML = insertionImage4;
};

function ChangeSlideActionFilms(sens) {
  actionFilmIndex += sens;
  if (actionFilmIndex > 3) {
    actionFilmIndex = 3;
  update_actionFilms(films, actionFilmIndex);
  }
  else if (actionFilmIndex < 0) {
    actionFilmIndex = 0;
  update_actionFilms(films, actionFilmIndex);
  }
  else {
  update_actionFilms(films, actionFilmIndex);
  }
};

function init_horrorFilms() {
  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Horror&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=7&page=1")
  .then(response => response.json())
  .then(function(responseJson) {
    responseResults = responseJson.results;
    responseResults.forEach(dataFilm => {
      films[dataFilm.id] = dataFilm;
      horrorFilms.push(dataFilm.id);
    });
    update_horrorFilms(films, horrorFilmIndex);
  });
};

function update_horrorFilms(films, horrorFilmIndex) {
  let divImage1 = document.querySelector("#cat2_film1");
  let filmId = horrorFilms[horrorFilmIndex];
  let image = films[filmId].image_url;
  let insertionImage = '<img src="'+image+'" onclick="init_filmInformations('+filmId+')" />';
  divImage1.innerHTML = insertionImage;

  let divImage2 = document.querySelector("#cat2_film2");
  let filmId2 = horrorFilms[horrorFilmIndex+1];
  let image2 = films[filmId2].image_url;
  let insertionImage2 = '<img src="'+image2+'" onclick="init_filmInformations('+filmId2+')" />';
  divImage2.innerHTML = insertionImage2;

  let divImage3 = document.querySelector("#cat2_film3");
  let filmId3 = horrorFilms[horrorFilmIndex+2];
  let image3 = films[filmId3].image_url;
  let insertionImage3 = '<img src="'+image3+'" onclick="init_filmInformations('+filmId3+')" />';
  divImage3.innerHTML = insertionImage3;

  let divImage4 = document.querySelector("#cat2_film4");
  let filmId4 = horrorFilms[horrorFilmIndex+3];
  let image4 = films[filmId4].image_url;
  let insertionImage4 = '<img src="'+image4+'" onclick="init_filmInformations('+filmId4+')" />';
  divImage4.innerHTML = insertionImage4;
};

function ChangeSlideHorrorFilms(sens) {
  horrorFilmIndex += sens;
  if (horrorFilmIndex > 3) {
    horrorFilmIndex = 3;
  update_horrorFilms(films, horrorFilmIndex);
  }
  else if (horrorFilmIndex < 0) {
    horrorFilmIndex = 0;
  update_horrorFilms(films, horrorFilmIndex);
  }
  else {
  update_horrorFilms(films, horrorFilmIndex);
  }
};

function init_romanceFilms() {
  fetch("http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=&imdb_score_max=&title=&title_contains=&genre=Romance&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=&page_size=7&page=1")
  .then(response => response.json())
  .then(function(responseJson) {
    responseResults = responseJson.results;
    responseResults.forEach(dataFilm => {
      films[dataFilm.id] = dataFilm;
      romanceFilms.push(dataFilm.id);
    });
    console.log(films)
    update_romanceFilms(films, romanceFilmIndex);
  });
};

function update_romanceFilms(films, romanceFilmIndex) {
  let divImage1 = document.querySelector("#cat3_film1");
  let filmId = romanceFilms[romanceFilmIndex];
  let image = films[filmId].image_url;
  let insertionImage = '<img src="'+image+'" onclick="init_filmInformations('+filmId+')" />';
  divImage1.innerHTML = insertionImage;

  let divImage2 = document.querySelector("#cat3_film2");
  let filmId2 = romanceFilms[romanceFilmIndex+1];
  let image2 = films[filmId2].image_url;
  let insertionImage2 = '<img src="'+image2+'" onclick="init_filmInformations('+filmId2+')" />';
  divImage2.innerHTML = insertionImage2;

  let divImage3 = document.querySelector("#cat3_film3");
  let filmId3 = romanceFilms[romanceFilmIndex+2];
  let image3 = films[filmId3].image_url;
  let insertionImage3 = '<img src="'+image3+'" onclick="init_filmInformations('+filmId3+')" />';
  divImage3.innerHTML = insertionImage3;

  let divImage4 = document.querySelector("#cat3_film4");
  let filmId4 = romanceFilms[romanceFilmIndex+3];
  let image4 = films[filmId4].image_url;
  let insertionImage4 = '<img src="'+image4+'" onclick="init_filmInformations('+filmId4+')" />';
  divImage4.innerHTML = insertionImage4;
};

function ChangeSlideRomanceFilms(sens) {
  romanceFilmIndex += sens;
  if (romanceFilmIndex > 3) {
    romanceFilmIndex = 3;
  update_romanceFilms(films, romanceFilmIndex);
  }
  else if (romanceFilmIndex < 0) {
    romanceFilmIndex = 0;
  update_romanceFilms(films, romanceFilmIndex);
  }
  else {
  update_romanceFilms(films, romanceFilmIndex);
  }
};

function init_filmInformations(filmId) {                                   
  fetch("http://localhost:8000/api/v1/titles/" + filmId)
  .then(response => response.json())
  .then(function(responseJson) {
    testFilm = responseJson;
    viewInformations(testFilm);
  });
};

function viewInformations(testFilm) {
  let divImage = document.querySelector("#banniere_image_film_selectionned");
  let image = `${testFilm.image_url}`;
  let insertionImage = '<img src="'+image+'" />';
  divImage.innerHTML = insertionImage;
  let divTitle = document.querySelector("#title-result");
  divTitle.innerHTML = "<span>Titre : </span>" + testFilm.title;
  let divDescription = document.querySelector("#long-description-result");
  divDescription.innerHTML = "<span>Description : </span>" + testFilm.long_description;
  let divGenre = document.querySelector("#genre-result");
  divGenre.innerHTML = "<span>Genres : </span>" + testFilm.genres;
  let divDate = document.querySelector("#date_published-result");
  divDate.innerHTML = "<span>Date de sortie : </span>" + testFilm.date_published;
  let divScore = document.querySelector("#imdb_score-result");
  divScore.innerHTML = "<span>Score Imbd : </span>" + testFilm.imdb_score;
  let divActors = document.querySelector("#actors-result");
  divActors.innerHTML = "<span>Acteurs : </span>" + testFilm.actors;
  let divDuration = document.querySelector("#duration-result");
  divDuration.innerHTML = "<span>Durée : </span>" + testFilm.duration;
  let divCountries = document.querySelector("#countries-result");
  divCountries.innerHTML = "<span>Pays : </span>" + testFilm.countries;
  let divDirectors = document.querySelector("#realisateur-result");
  divDirectors.innerHTML = "<span>Réalisateur : </span>" + testFilm.directors;
  let divRated = document.querySelector("#rated-result");
  divRated.innerHTML = "<span>Rated : </span>" + testFilm.rated;
  let divBoxOffice = document.querySelector("#box-office-result");
  divBoxOffice.innerHTML = "<span>Résultat au Box Office : </span>" + testFilm.avg_vote;

  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

init_imageBestRatedFilm();
init_bestRatedFilms();
init_actionFilms();
init_horrorFilms();
init_romanceFilms();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  viewInformations(testFilms);
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  divTitle.innerHTML = '<span>Titre : </span>';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}