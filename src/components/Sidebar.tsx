import { Stack } from "@chakra-ui/react";
import LanguagesList from "./LanguageList";
import { ChangeEvent } from "react";
import GenreList from "./GenreList";
interface Props {
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Sidebar = ({ onSelect }: Props) => {
  return (
    <>
      <Stack paddingX={3} paddingTop={3}>
        <GenreList onSelect={onSelect} />
        <LanguagesList onSelect={onSelect} />
      </Stack>
    </>
  );
};

export default Sidebar;
