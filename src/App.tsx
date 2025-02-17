import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import Sidebar from "./components/Sidebar";
import SortOption from "./components/SortOption";
import RatingOption from "./components/RatingOption";

function App() {
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
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack>
          <SortOption />
          <RatingOption />
        </HStack>
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
