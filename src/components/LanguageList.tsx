import useLanguages from "../hooks/useLanguages";
import ExpandableList from "./ExpandableList";

const LanguagesList = () => {
  const { data: languages, error } = useLanguages();

  if (error) return null;
  return (
    <>{languages && <ExpandableList children="Languages" data={languages} />}</>
  );
};

export default LanguagesList;
