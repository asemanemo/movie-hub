import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";
import { imageUrl } from "../services/api-client";

interface Props {
  movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl + movie.poster_path} />
      <CardBody>
        <Heading fontSize="2xl"> {movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
