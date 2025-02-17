import { getRuntimeOptions } from "../data/runtimeOptions";
import useFilterList from "./useFilterList";

const useRuntimeOptions = () => useFilterList(getRuntimeOptions());

export default useRuntimeOptions;
