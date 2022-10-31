import React, { useState } from "react";
import { Box, Input, Button } from "@chakra-ui/react";

function SignIn(props) {
  const [user, setUser] = useState({
    username: null,
    password: null,
  });

  const islogIn = () => {
    console.log("clicked");
    if (user.username.length === 0 || user.password.length === 0) {
      alert("error, check passwor or username");
    } else {
      alert("Sign in ")
    }
  };
  return (
    <Box
      p={10}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      fontSize={"2xl"}
      textAlign={"center"}
    >
      Sign In
      <Input
        onChange={(e) => {
          setUser((prev) => {
            return {
              ...prev,
              username: e.target.value,
            };
          });
        }}
        type={"text"}
        bg={"whiteAlpha.900"}
        placeholder={"Username"}
      />
      <Input
        onChange={(e) => {
          setUser((prev) => {
            return {
              ...prev,
              password: e.target.value,
            };
          });
        }}
        type={"password"}
        bg={"whiteAlpha.900"}
        placeholder={"password"}
      />
      <Button bg={"blue.400"} onClick={islogIn}>
        Log In
      </Button>
      {user.password}
      <br />
      {user.username}
    </Box>
  );
}

export default SignIn;
