// Ways to calculate the years dynamicly
const premieredSince = Array.from(
  { length: new Date().getFullYear() - 1950 + 1 },
  (_, i) => 1950 + i
);

export function getPremieredSince() {
  return premieredSince;
}

// Hard coded years
// const premieredSince = [
//     "1950s",
//     "1960s",
//     "1970s",
//     "1980s",
//     "1990s",
//     "2000s",
//     "2010s",
//     "2020s"
//   ];
