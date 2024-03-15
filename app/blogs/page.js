"use client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://blog-backend-dev-mfbj.2.sg-1.fl0.io/getAllBlogs",
        {
          method: "GET",
          headers: {
            mode: "no-cors",
          },
        }
      );

      const result = await res.json();
      console.log(result);
      setBlogs(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
    return formattedDate;
  }

  function generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  return (
    <>
      <Text fontSize="3xl" align="center" mt={12} className="font-bold">
        Explore the world of delicious food!
      </Text>
      {isLoading ? (
        <Flex justify="center" mt={20}>
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Flex direction={"row"} justifyContent={"center"}>
          <Box my={20}>
            <SimpleGrid columns={2} spacing={10}>
              {blogs.map((item) => (
                <Link
                  href={`/blog/${generateSlug(item.title)}`}
                  passHref
                  key={item._id}
                >
                  <Card maxW="xl">
                    <CardBody>
                      <Image
                        src={item.image}
                        alt={item.title}
                        borderRadius="lg"
                      />
                      <Stack mt="6" spacing="3">
                        <Text fontSize="2xl">
                          {item.title.length > 100
                            ? item.title.substring(0, 100) + "..."
                            : item.title}
                        </Text>
                      </Stack>
                      <Stack mt="6" spacing="3">
                        <Text fontSize="xl">
                          {item.content.length > 100
                            ? item.content.substring(0, 100) + "..."
                            : item.content}
                        </Text>
                      </Stack>
                    </CardBody>
                    <CardFooter>
                      <Flex justifyContent="space-around">
                        <Text fontSize="md" as="i">
                          {formatDate(item.createdAt)}
                        </Text>
                      </Flex>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default page;
