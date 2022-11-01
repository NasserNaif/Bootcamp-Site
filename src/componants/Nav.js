import React from "react";
import { Box, Image, Input, Button } from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";

function Nav(props) {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={9}
      as={"nav"}
      bg={"#000024"}
      height="4rem"
      width={"100%"}
      color={"#efefef"}
      fontSize="1.5rem"
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"9px"}
      >
        <Image src={"IMG/Logo.jpg"} alt="logo" height={"50px"} />
        <p>Bootcamps</p>
      </Box>
      <Box display={"flex"}>
        <Input
          onChange={props.searchFunc}
          width={"13.9rem"}
          bg={""}
          placeholder={"Search Bootacamps"}
          color={"#000024"}
        />
        <Button colorScheme={"green"}>
          <AiOutlineSearch />
        </Button>
      </Box>
    </Box>
  );
}

export default Nav;
