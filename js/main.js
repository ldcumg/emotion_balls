//API로 데이터 가져오기
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzhhOWIxZWIzMjI2Nzg5ZDIxMTg0MjIzMDJlZjMxMCIsIm5iZiI6MTcyMjgyMjUxNS43OTU3MTgsInN1YiI6IjY2YTIyNzBlZmQwMTEzNTljNTZlODYwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fj-y0rpCMgfuKXVOEhrznAfL7prb5qJu8xo6mw_1e14",
    },
};
//fetch 페이지 10개 만들어서 영화 개수 늘리기
async function fetchData() {
    const response1 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options);
    const data1 = await response1.json();

    const response2 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=2", options);
    const data2 = await response2.json();

    const response3 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=3", options);
    const data3 = await response3.json();

    const response4 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=4", options);
    const data4 = await response4.json();

    const response5 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=5", options);
    const data5 = await response5.json();

    const response6 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=6", options);
    const data6 = await response6.json();

    const response7 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=7", options);
    const data7 = await response7.json();

    const response8 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=8", options);
    const data8 = await response8.json();

    const response9 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=9", options);
    const data9 = await response9.json();

    const response10 = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=10", options);
    const data10 = await response10.json();

    const movies1 = data1.results;
    const movies2 = data2.results;
    const movies3 = data3.results;
    const movies4 = data4.results;
    const movies5 = data5.results;
    const movies6 = data6.results;
    const movies7 = data7.results;
    const movies8 = data8.results;
    const movies9 = data9.results;
    const movies10 = data10.results;

    const mergeMovies = [...movies1, ...movies2, ...movies3, ...movies4, ...movies5, ...movies6, ...movies7, ...movies8, ...movies9, ...movies10];
    //영화 리스트 하나의 배열로 합치기

    const genres = [
        { Id: 28, name: "Action" },
        { Id: 12, name: "Adventure" },
        { Id: 16, name: "Animation" },
        { Id: 35, name: "Comedy" },
        { Id: 80, name: "Crime" },
        { Id: 99, name: "Documentary" },
        { Id: 18, name: "Drama" },
        { Id: 10751, name: "Family" },
        { Id: 14, name: "Fantasy" },
        { Id: 36, name: "History" },
        { Id: 27, name: "Horror" },
        { Id: 10402, name: "Music" },
        { Id: 9648, name: "Mystery" },
        { Id: 10749, name: "Romance" },
        { Id: 878, name: "Science Fiction" },
        { Id: 10770, name: "TV Movie" },
        { Id: 53, name: "Thriller" },
        { Id: 10752, name: "War" },
        { Id: 37, name: "Western" },
    ];

    // genres에 있는 배열 중, romance, musical이 포함된 id를 추출
    const genresSearch = function (selectGenres) {
        const romanceGenres = genres.filter(function (genre) {
            return genre.name === selectGenres;
        });
        return romanceGenres;
    };

    // 위에서 찾은 장르 id와 일치하는 영화 목록(영화의 genre_ids가 1)에서 뽑은 id를 포함하는지)을 mergeMovies에서 필터링
    const genreArr = function (genre) {
        const genreList = mergeMovies.filter(function (movie) {
            return movie.genre_ids.includes(genre[0].Id);
        });
        return genreList;
    };

    //querySelector로 class 지정하여 안에 moviecard 추가, 데이터 추가
    const cardMaker = function (genre, classselect) {
        const innerCard = document.querySelector(`.movielist-section-${classselect}`);
        genre.forEach((movie) => {
            const cardImg = document.createElement("li");
            cardImg.className = "movie-card";
            cardImg.innerHTML = `
            <a href="/pages/detail.html?movieId=${movie.id}" class="movie-card-inner">
                <div class="movie-card-img" style="background-image:url(https://image.tmdb.org/t/p/w500${movie.poster_path})"></div>
                <div class="movie-card-con">
                    <div class="movie-card-tit">${movie.title}</div>
                    <div class="movie-card-info">
                        <div class="movie-card-rating">
                            <span class="material-symbols-rounded"> kid_star </span>
                            ${movie.vote_average}
                        </div>
                        <span class="movie-card-date">${movie.release_date}</span>
                    </div>
                    <div class="movie-card-txt">${movie.overview}</div>
                </div>
            </a>`;
            innerCard.appendChild(cardImg);
        });
    };

    //장르별로 함수 실행
    cardMaker(genreArr(genresSearch("Romance")), "happy");
    cardMaker(genreArr(genresSearch("Comedy")), "sad");
    cardMaker(genreArr(genresSearch("War")), "angry");
    cardMaker(genreArr(genresSearch("Documentary")), "anxiety");
    cardMaker(genreArr(genresSearch("Animation")), "cold");
}

fetchData().catch((error) => console.error("Error:", error));
