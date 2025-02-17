import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import LanguagesList from "./components/LanguageList";
import CountryLIst from "./components/CountryLIst";
import NetworkList from "./components/NetworkList";
import WebChannel from "./components/WebChannel";

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
          <VStack>
            <LanguagesList />
            <GenreList />
            <CountryLIst />
            <NetworkList />
            <WebChannel />
          </VStack>
        </GridItem>
      </Show>
      <GridItem area="main">
        <MovieGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
