function useFilterList(
  data: string[] | null,
  error?: string | null,
  isLoading?: boolean | false
) {
  return { data, error, isLoading };
}

export default useFilterList;
