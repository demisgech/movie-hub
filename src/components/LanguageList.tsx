import { Heading, Select } from "@chakra-ui/react";
import useLanguages from "../hooks/useLanguages";
import { ChangeEvent } from "react";
// import ExpandableList from "./ExpandableList";

interface Props {
  onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const LanguagesList = ({ onSelect }: Props) => {
  const { data: languages, error } = useLanguages();

  if (error) return null;
  return (
    <>
      {/* {languages && <ExpandableList children="Languages" data={languages} />} */}

      <Heading as="label" htmlFor="languages">
        Languages
      </Heading>
      <Select name="language" onChange={onSelect} id="languages">
        {languages &&
          languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
      </Select>
    </>
  );
};

export default LanguagesList;
