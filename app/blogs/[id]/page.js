import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Page = () => {
  return (
    <Flex justifyContent="center" height="100vh" mt={10}>
      <Box textAlign="center">
        <Image
          src="https://i.postimg.cc/P5TWtp76/undraw-breakfast-psiw-2.png"
          alt="Breakfast Illustration"
          w={600}
          h={500}
          mb={4}
          mr={"auto"}
          ml={"auto"}
        />
        <Text fontSize="4xl" fontWeight="bold" mb={2}>
          How to Deploy Your Node.js
        </Text>
        <Text fontSize="xl" fontWeight="medium">
          Backend on Vercel: A Step-by-Step Guide
        </Text>
      </Box>
    </Flex>
  );
};

export default Page;
