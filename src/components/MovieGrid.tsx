import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text color="red">{error}</Text>;
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={10}
      gap={10}
      padding={10}
    >
      {isLoading &&
        skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
      {movies &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </SimpleGrid>
  );
};

export default MovieGrid;
