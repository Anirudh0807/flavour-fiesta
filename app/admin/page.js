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

  const handleGenerateBlog = () => {
    sendBlogData();
  };

  async function getRecipeDetails(recipeName, maxRetries = 3) {
    const response = await fetch(
      "https://blog-backend-dev-mfbj.2.sg-1.fl0.io/query",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipeName,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  }

  async function sendBlogData(
    title,
    content,
    image = "https://imgur.com/a/xrMcyYH"
  ) {
    const response = await fetch(
      "https://blog-backend-dev-mfbj.2.sg-1.fl0.io/blog",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
          image,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  }

  return (
    <Flex p={6} direction={"column"}>
      <Input variant={"filled"} size="lg" placeholder="Recipe Name" />

      {links.map((link) => (
        <Box w={"fit-content"} bg={"blue.400"} rounded={"xl"} mt={2}>
          <Text p={2}>{link}</Text>
        </Box>
      ))}

      <Input
        variant={"filled"}
        value={input}
        size={"lg"}
        placeholder="Enter the links"
        mt={4}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleSecondInputKeyDown}
      />

      <Button
        mt={4}
        bg={"blue.500"}
        alignSelf={"center"}
        onClick={handleGenerateBlog}
      >
        Generate Blog
      </Button>
    </Flex>
  );
}
