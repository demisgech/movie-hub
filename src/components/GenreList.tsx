import { Heading, Select } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
// import ExpandableList from "./ExpandableList";
import { ChangeEvent } from "react";

interface Props {
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}
const GenreList = ({ onSelect }: Props) => {
  const { data: genres, error } = useGenres();
  if (error) return null;
  return (
    <>
      {/* <ExpandableList children="Genres" data={genres} /> */}
      <Heading as="label" htmlFor="genres">
        Genres
      </Heading>
      <Select name="genre" onChange={onSelect} id="genres">
        {genres &&
          genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
      </Select>
    </>
  );
};

export default GenreList;
