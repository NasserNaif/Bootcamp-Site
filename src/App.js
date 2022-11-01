import "./App.css";
import React, { useState } from "react";
import Data from "./data";
import Nav from "./componants/Nav";
import Cards from "./componants/Cards";
import Footer from "./componants/Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import SignIn from "./componants/SignIn";
function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    isLogIn: false,
  });
  const [search, setSearch] = useState("");

  const data = Data;

  // const filterSearch = () => {
  //   setData((prev) => {
  //     prev.filter((elm) => elm.title.toLowerCase().includes(search));
  //   });
  // };

  const bnt = () => {
    if (user.username.length === 0 || user.password.length === 0) {
      alert("Error");
    } else {
      setUser((prev) => ({
        ...prev,
        isLogIn: true,
      }));
    }
  };

  const CardsElm = data
    .filter((filt) => filt.title.toLocaleLowerCase().includes(search))
    .map((elm) => (
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
          <Nav
            searchFunc={(e) => setSearch(e.target.value)}
            // clickSearch={() => filterSearch()}
          />
        </GridItem>
        <GridItem colSpan={2} m={4}>
          <Grid
            templateColumns={"repeat(2,auto)"}
            gap={20}
            justifyContent={"center"}
          >
            {user.isLogIn ? (
              CardsElm
            ) : (
              <SignIn
                changeUsername={(e) => {
                  setUser((prev) => {
                    return {
                      ...prev,
                      username: e.target.value,
                    };
                  });
                }}
                changePassword={(e) => {
                  setUser((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    };
                  });
                }}
                btnOnclick={() => bnt()}
              />
            )}
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
