import { Box, Input, Button } from "@chakra-ui/react";

function SignIn(props) {
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
        onChange={props.changeUsername}
        type={"text"}
        bg={"whiteAlpha.900"}
        placeholder={"Username"}
      />
      <Input
        onChange={props.changePassword}
        type={"password"}
        bg={"whiteAlpha.900"}
        placeholder={"password"}
      />
      <Button bg={"blue.400"} onClick={props.btnOnclick}>
        Log In
      </Button>
    </Box>
  );
}

export default SignIn;
