import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

/**
چیزی که از سرور می گیریم یک اری از آبجکت هاست 
هر آبجکت یک فیلمه
 */

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <MovieCardContainer>
              <MovieCardSkeleton key={skeleton} />
            </MovieCardContainer>
          ))}
        {movies.map((movie) => (
          <MovieCardContainer>
            <MovieCard key={movie.id} movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
