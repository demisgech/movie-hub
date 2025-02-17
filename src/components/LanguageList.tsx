import useLanguages from "../hooks/useLanguages";
import DropdownList from "./DropdownList";

const LanguagesList = () => {
  const { data: languages, error } = useLanguages();

  if (error) return null;
  return (
    <>{languages && <DropdownList children="Languages" data={languages} />}</>
  );
};

export default LanguagesList;
