import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";
import { imageUrl } from "../services/api-client";
import Rating from "./Rating";

interface Props {
  movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl + movie.poster_path} />
      <CardBody>
        <HStack justifyContent="space-between">
          <Heading fontSize="2xl"> {movie.title}</Heading>
          <Rating rating={movie.vote_average} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
