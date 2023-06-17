import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



export interface Movies {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;

  }
  
  export interface FetchMoviesResponse {
    results: Movies[];
  }


const useMovies = () => {

    const [movies, setMovies] = useState<Movies[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);

    apiClient
        .get<FetchMoviesResponse>("movie/now_playing", {signal: controller.signal})
        .then((res) => {
          setMovies(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; 
          setError(err.message)});
          

      return () => controller.abort();
}, []);

    return {movies, error, isLoading};
}

export default useMovies;