import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface MoviePoster {
  medium: string;
  original: string;
}

interface Rating {
  average: number;
}
export interface Movie {
  id: number;
  name: string;
  image: MoviePoster;
  rating: Rating;
  genres: string[];
  language: string;
}

interface MoviesFilterProps {
  genre: string;
  language: string;
  rating: number;
}
// interface FetchMovieResponse {
//   (): Movie[];
// }

function useMovies({ genre, language, rating }: MoviesFilterProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<Movie[]>("/shows", {
        signal: controller.signal,
      })
      .then((response) => {
        let filteredMovies: Movie[] = response.data;
        if (genre)
          filteredMovies = filteredMovies.filter((movie) =>
            movie.genres.includes(genre)
          );

        if (language)
          filteredMovies = filteredMovies.filter(
            (movie) => movie.language.toUpperCase() === language.toUpperCase()
          );

        if (rating)
          filteredMovies = filteredMovies.filter(
            (movie) => movie.rating.average >= rating
          );
        setMovies(filteredMovies);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [genre, language, rating]);
  return { movies, error, isLoading };
}

export default useMovies;
