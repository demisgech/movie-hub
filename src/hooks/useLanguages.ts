import { getLanguages } from "../data/languages";

const useLanguages = () => ({
  languages: getLanguages(),
  error: null,
  isLoading: false,
});

export default useLanguages;
