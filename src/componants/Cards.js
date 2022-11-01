import React from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";

function Cards(props) {
  return (
    <Box
      bg={"white"}
      p={3}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={2}
      boxShadow={"lg"}
      borderRadius={15}
      
    >
      <Image src={props.img} maxW={90} borderRadius={"15px"} />
      <Box
        fontSize={"1.3rem"}
        display={"flex"}
        flexDirection="column"
        gap={"1"}
        alignItems={"start"}
      >
        <Text fontSize={"xl"}>{props.title}</Text>
        <Text fontSize={"sm"}>
          from {props.start} to {props.end}{" "}
        </Text>

        <Button
          color={"whiteAlpha.900"}
          bg={props.isAvb ? "green.400" : "gray.500"}
          w={"70%"}
          _hover={{ bg: props.isAvb ? "green.600" : "gray.300" }}
          onClick={props.clickSearch}
        >
          {props.isAvb ? "Enroll Now" : "Sorry closed"}
        </Button>
      </Box>
    </Box>
  );
}

export default Cards;
