"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [links, setLinks] = useState([]);
  const [input, setInput] = useState("");

  const handleSecondInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setLinks((prevLinks) => [...prevLinks, input]);
      setInput("");
      console.log(links);
    }
  };

  return (
    <Flex p={6} direction={"column"}>
      <Input variant={"filled"} size="lg" placeholder="Recipe Name" />

      {links.map((link) => (
        <Box w={"fit-content"} bg={"blue.400"} rounded={"xl"} mt={2}>
          <Text p={2}>{link}</Text>
        </Box>
      ))}

      <Input
        value={input}
        size={"lg"}
        placeholder="Enter the links"
        mt={4}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSecondInputKeyDown}
      />

      <Button mt={4} bg={"blue.500"} alignSelf={"center"}>
        Generate Blog
      </Button>
    </Flex>
  );
}
