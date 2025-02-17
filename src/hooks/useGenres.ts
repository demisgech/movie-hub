import { getGenres } from "../data/genres";

const useGenres = () => ({
  genres: getGenres(),
  isLoading: false,
  error: null,
});

export default useGenres;
