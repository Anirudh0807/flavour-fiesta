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
import React from "react";

const page = () => {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <Flex direction={"row"} justifyContent={"center"}>
        <Box my={20}>
          <SimpleGrid columns={2} spacing={10}>
            {arr.map((index) => (
              <Card key={index} maxW="xl">
                <CardBody>
                  <Image
                    src="https://www.animeexplained.com/wp-content/uploads/2023/03/JJK-season-2-visual.jpg"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                      This sofa is perfect for modern tropical spaces, baroque
                      inspired spaces, earthy toned spaces and for people who
                      love a chic design with a sprinkle of vintage design.
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex justifyContent="space-around">
                    <Text>Arko is Gay</Text>
                    <Text>25 October 2024</Text>
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
