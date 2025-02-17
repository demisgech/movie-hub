import { Card, CardBody, HStack, Image, Link, Text } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";
import Like from "./Like";
import SimpleStar from "./stars/SimpleStar";

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
        <Link fontSize="2xl">{movie.name}</Link>
        <HStack marginTop={2} justifyContent="space-between">
          <Like onClick={handleLikeClick} />
          <HStack>
            <SimpleStar onClick={handleLikeClick} />
            <Text>{movie.rating.average}</Text>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
