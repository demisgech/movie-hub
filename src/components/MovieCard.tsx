import { Card, CardBody, HStack, Image, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import Like from "./Like";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const handleLikeClick = () => {
    console.log("Clicked");
  };
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={movie.image.medium} objectFit="cover" />
      <CardBody>
        <Text fontSize="2xl">{movie.name}</Text>
        <HStack>
          <Like onClick={handleLikeClick} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
