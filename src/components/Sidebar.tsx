import { Stack } from "@chakra-ui/react";
import CountryLIst from "./CountryLIst";
import GenreList from "./GenreList";
import LanguagesList from "./LanguageList";
import NetworkList from "./NetworkList";
import WebChannel from "./WebChannel";

const Sidebar = () => {
  return (
    <>
      <Stack paddingX={3} paddingTop={3}>
        <LanguagesList />
        <GenreList />
        <CountryLIst />
        <NetworkList />
        <WebChannel />
      </Stack>
    </>
  );
};

export default Sidebar;
