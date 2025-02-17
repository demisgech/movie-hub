const runtimeOptions = [
  5, // Short-form content
  10, // Web series, short episodes
  15, // Mini-episodes, animated shorts
  22, // Half-hour sitcoms (without ads)
  30, // Half-hour shows (with ads)
  45, // Extended drama episodes
  60, // Hour-long TV dramas and reality shows
  90, // TV specials, short movies
  120, // Feature-length films
  150, // Extended movies
  180, // Long-form films or director’s cuts
];

export function getRuntimeOptions() {
  return runtimeOptions;
}
