const ratingOptions = [
  "G", // General Audience (suitable for all ages)
  "PG", // Parental Guidance suggested
  "PG-13", // Parents strongly cautioned (some material may not be suitable for children under 13)
  "R", // Restricted (under 17 requires accompanying parent or adult guardian)
  "NC-17", // No one 17 and under admitted
  "TV-Y", // All children (suitable for ages 2-6)
  "TV-Y7", // Directed to older children (ages 7+)
  "TV-G", // General Audience (suitable for all ages)
  "TV-PG", // Parental guidance suggested
  "TV-14", // Parents strongly cautioned (not suitable for children under 14)
  "TV-MA", // Mature Audience (not suitable for children under 17)
  "NR", // Not Rated
  "Unrated", // No official rating assigned
];

export function getRatingsOptions() {
  return ratingOptions;
}
