import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" bg="black">
        Navbar
      </GridItem>
      <Show above="md">
        <GridItem area="sidebar" bg="blue">
          Sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="orange">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
