import express from "express";
import { movies } from "./movies.js";

const app = express();

app.use(express.json());

//  home route

app.get("/", (req, res) => {
  res.send("Movie API is running");
});

// Get all movies

app.get("/movies", (req, res)=>{
    res.json(movies);
})

// Get Single Movie by ID

app.get("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({
      message: "Movie not found",
    });
  }
});

//  Filter Movies Using Query Parameters

app.get("/movies", (req, res) => {
  const { genre, language, rating, releaseYear, availableOnOTT, search } =
    req.query;
  console.log(req.query);

  let filteredMovies = movies;
  if (genre) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.genre === genre;
    });
  }

  if (language) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.language === language;
    });
  }

  if (rating) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.rating >= Number(rating);
    });
  }

  if (releaseYear) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.releaseYear === Number(releaseYear);
    });
  }

  if (availableOnOTT) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.availableOnOTT === (availableOnOTT === "true");
    });
  }

  // search movie

  if (search) {
    filteredMovies = filteredMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  res.json(filteredMovies);
});

// Create New Movie

app.post("/movies", (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;

  movies.push(movie);
  res.status(201).json({
    message: "Movie created Successfully",
    movie: movie,
  });
});

// Update Movie Using PATCH

app.patch("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  console.log(id, data);
  const movie = movies.find((movie) => movie.id === id);

  if (movie) {
    Object.assign(movie, data, {id});
    res.json({
      message: "Movie updated Successfully",
      movie: movie,
    });
  } else {
    res.status(404).json({
  message: "Movie not found",
});
  }
});

//   Replace Movie Using PUT

app.put("/movies/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;

  const index = movies.findIndex((movie) => movie.id === id);


  if (index !== -1) {
    const updateMovie = {
        ...data,
        id: id
    }
    movies[index] = updateMovie;
    res.json({
      message: "Movie replaced successfully",
      movie: movies[index],
    });
  } else {
    res.status(404).json({
      message: "Movie not found",
    });
  }
});

// Delete Movie

app.delete("/movies/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = movies.findIndex((movie) => movie.id === id);

  if (index !== -1) {
    let deletedMovie = movies.splice(index, 1);
    res.json({
      message: "Movie deleted successfully",
      movie: deletedMovie,
    });
  } else {
    res.status(404).json({
      message: "Movie not found",
    });
  }
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
