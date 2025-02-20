import { Select } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function SelectOption() {
  const { data } = useGenres();
  return (
    <Select>{data && data.map((d) => <option value={d}>{d}</option>)}</Select>
  );
}

export default SelectOption;
