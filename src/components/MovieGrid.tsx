import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";

/**
چیزی که از سرور می گیریم یک اری از آبجکت هاست 
هر آبجکت یک فیلمه
 */

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={3} spacing={10}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
