import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface Movies {
    id: number;
    title: string;
    poster_path: string;
  }
  
  interface FetchMoviesResponse {
    results: Movies[];
  }


const useMovies = () => {

    const [movies, setMovies] = useState<Movies[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
      const controller = new AbortController();

    apiClient
        .get<FetchMoviesResponse>("movie/now_playing", {signal: controller.signal})
        .then((res) => setMovies(res.data.results))
        .catch((err) => {
          if (err instanceof CanceledError) return; 
          setError(err.message)});

      return () => controller.abort();
}, []);

    return {movies, error};
}

export default useMovies;