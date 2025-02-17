const premieredUntil = Array.from(
  { length: new Date().getFullYear() - 1950 + 1 },
  (_, i) => 1950 + i
);

export function getPremieredUntil() {
  return premieredUntil;
}
