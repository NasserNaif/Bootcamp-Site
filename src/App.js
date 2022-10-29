import "./App.css";
import Data from "./data";
import Nav from "./componants/Nav";
import Cards from "./componants/Cards";
import Footer from "./componants/Footer";
import { Grid, GridItem, Image } from "@chakra-ui/react";
function App() {
  const data = Data;

  const CardsElm = data.map((elm) => (
    <Cards
      key={elm.id}
      img={elm.image}
      title={elm.title}
      isAvb={elm.isAvalibale}
      start={elm.start}
      end={elm.end}
    />
  ));
  return (
    <div className="App">
      <Grid
        className="mainGrid"
        templateColumns={`repeat(2,1fr)`}
        templateRows={"repeat(4,auto)"}
      >
        <GridItem colSpan={2}>
          <Nav />
        </GridItem>
        <GridItem colSpan={2} m={4}>
          <Grid
            templateColumns={"repeat(2,auto)"}
            gap={20}            justifyContent={"center"}
          >
            {CardsElm}
          </Grid>
        </GridItem>

        <GridItem colSpan={2}>
          <Footer />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
