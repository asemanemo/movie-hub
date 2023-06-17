import { useState, useEffect } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { FetchMoviesResponse, Movies } from "./useMovies";




const usePopular = () => {

    const [popular, setPopular] = useState<Movies[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      const controller = new AbortController();

      setLoading(true);

    apiClient
        .get<FetchMoviesResponse>("movie/popular", {signal: controller.signal})
        .then((res) => {
          setPopular(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; 
          setError(err.message)});
          

      return () => controller.abort();
}, []);

    return {popular, error, isLoading};
}

export default usePopular;