import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movies } from "../hooks/useMovies";

interface Props {
  movie: Movies;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      <CardBody>
        <Heading> {movie.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
