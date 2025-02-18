import useRuntimeOptions from "../hooks/useRuntimeOptions";
import DropdownList from "./DropdownList";

function RuntimeOptions() {
  const { data: runtimeOptions, error } = useRuntimeOptions();
  if (error) return null;
  return <DropdownList children="Runtimes" data={runtimeOptions} />;
}

export default RuntimeOptions;
