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
}

interface FetchMovieResponse {
  (): Movie[];
}

function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchMovieResponse>("/shows", {
        signal: controller.signal,
      })
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { movies, error, isLoading };
}

export default useMovies;
