import useGenres from "../hooks/useGenres";
import ExpandableList from "./ExpandableList";

const GenreList = () => {
  const { data: genres, error } = useGenres();
  if (error) return null;
  return (
    <>
      <ExpandableList children="Genres" data={genres} />
    </>
  );
};

export default GenreList;
