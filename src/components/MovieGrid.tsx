import { SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies } = useMovies();
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
      {movies && movies.map((movie) => <MovieCard movie={movie} />)}
    </SimpleGrid>
  );
};

export default MovieGrid;
