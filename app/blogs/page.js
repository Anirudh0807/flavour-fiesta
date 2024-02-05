"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const page = () => {

  const [blogs, setBlogs] = useState([]); // Added state for storing blog data

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    try {
      const res = await fetch("http://localhost:3001/getAllBlogs", {
        method: "GET",
        headers: {
          mode: "no-cors",
        },
      });

      const result = await res.json();
      setBlogs(result);
      console.log(result)
    } catch (err) {
      console.log(err);
    }
  }

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
    return formattedDate;
  }

  return (
    <>
      <Flex direction={"row"} justifyContent={"center"}>
        <Box my={20}>
          <SimpleGrid columns={2} spacing={10}>
            {blogs.map((item) => (
              <Card key={item._id} maxW="xl">
                <CardBody>
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      {item.content.length > 100
                        ? item.content.substring(0, 100) + "..."
                        : item.content}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex justifyContent="space-around">
                    <Text>Arko is Gay</Text>
                    <Text>{formatDate(item.createdAt)}</Text>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </>
  );
};

export default page;
