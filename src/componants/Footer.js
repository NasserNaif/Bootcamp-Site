import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as={"footer"}
      p={6}
      display={"flex"}
      justifyContent={"space-between"}
      bg={"#000024"}
      color={"gray.200"}
    >
      <Box display={"flex"} flexDirection={"column"} fontSize={"1.4rem"}>
        Contact :
        <UnorderedList>
          <ListItem
            className="list"
            fontSize={"1rem"}
            color={"gray.400"}
            listStyleType={"none"}
          >
            Email : Bootcamps@info.com
          </ListItem>
          <ListItem
            className="list"
            fontSize={"1rem"}
            color={"gray.400"}
            listStyleType={"none"}
          >
            Phone : 553 55849 389
          </ListItem>
        </UnorderedList>
      </Box>

      <Box
        bg={""}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        fontSize={"21px"}
      >
        {/* copyright */}
        <AiOutlineCopyright />
      </Box>

      <Box display={"flex"} flexDirection={"column"} fontSize={"1.4rem"}>
        About Us :
        <UnorderedList>
          <ListItem
            className="list"
            fontSize={"1rem"}
            color={"gray.400"}
            listStyleType={"none"}
          >
            Address : Riyadh, Saudi Arabia
          </ListItem>
          <ListItem
            className="list"
            fontSize={"1rem"}
            color={"gray.400"}
            listStyleType={"none"}
          >
            Website : www.Bootacamps.com
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
}

export default Footer;
