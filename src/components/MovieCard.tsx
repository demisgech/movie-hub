import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Movie } from "./MovieGrid";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={movie.image.medium} />
      <CardBody>
        <Text fontSize="2xl">{movie.name}</Text>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
