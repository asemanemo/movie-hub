import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

/**
چیزی که از سرور می گیریم یک اری از آبجکت هاست 
هر آبجکت یک فیلمه
 */

interface Movies {
  id: number;
  title: string;
}

interface FetchMoviesResponse {
  results: Movies[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("movie/now_playing")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MovieGrid;
