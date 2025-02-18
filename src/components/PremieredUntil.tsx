import usePremiereUntil from "../hooks/usePremiereUntil";
import DropdownList from "./DropdownList";

const PremieredUntil = () => {
  const { data: premieredUntil, error } = usePremiereUntil();

  if (error) return null;
  return <DropdownList data={premieredUntil}>Premiered Until:</DropdownList>;
};

export default PremieredUntil;
