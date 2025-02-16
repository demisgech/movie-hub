import { Card, SimpleGrid, Image, CardBody, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface MoviePoster {
  medium: string;
  original: string;
}

interface Movie {
  id: number;
  name: string;
  image: MoviePoster;
}

interface FetchMovieResponse {
  (): Movie[];
}

const MovieGrid = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get<FetchMovieResponse>("/shows");
        // console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={10}
      gap={5}
      padding={10}
    >
      {movies &&
        movies.map((movie) => (
          <Card key={movie.id}>
            <Image src={movie.image.original} />
            <CardBody>
              <Text>{movie.name}</Text>
            </CardBody>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
