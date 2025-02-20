import { Grid, GridItem, Heading, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import Sidebar from "./components/Sidebar";
import { ChangeEvent, useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    genre: "",
    language: "",
    rating: 0,
  });
  const handleSort = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar">
          <Sidebar onSelect={handleSort} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading paddingLeft={10} marginTop={2}>
          {filters
            ? `${filters.genre} Movies ${
                filters.language ? "In " + filters.language + " Languages" : ""
              }`
            : "Movies"}
        </Heading>
        <MovieGrid filters={filters} />
      </GridItem>
    </Grid>
  );
}

export default App;
