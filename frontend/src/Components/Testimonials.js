import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  chakra,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Ann Maria",
    role: "Chief Marketing Officer",
    content:
      "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed",
    avatar: "./images/Avatar/p1.jfif",
  },
  {
    name: "Krysta B.",
    role: "Entrepreneur",
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar: "./images/Avatar/p6.png",
  },
  {
    name: "Darcy L.",
    role: "Movie star",
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar: "./images/Avatar/p5.jfif",
  },

  {
    name: "Daniel T.",
    role: "Musician",
    content:
      "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
    avatar: "./images/Avatar/p4.jfif",
  },
  {
    name: "Ann Maria",
    role: "Chief Marketing Officer",
    content:
      "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
    avatar: "./images/Avatar/p1.jfif",
  },
  {
    name: "Krysta B.",
    role: "Entrepreneur",
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar: "./images/Avatar/p6.png",
  },
  {
    name: "Darcy L.",
    role: "Movie star",
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar: "./images/Avatar/p5.jfif",
  },

  {
    name: "Daniel T.",
    role: "Musician",
    content:
      "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
    avatar: "./images/Avatar/p4.jfif",
  },
];

export default function Testimonials() {
  return (
    <Flex
      textAlign={"center"}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      bg={useColorModeValue("gray.100", "gray.700")}
    >
      <chakra.h1
        p={5}
        fontSize={48}
        fontFamily={"Work Sans"}
        fontWeight={"bold"}
        color={useColorModeValue("gray.700", "gray.50")}
      >
        Testimonials
      </chakra.h1>
      <chakra.h2
        fontSize={20}
        fontFamily={"Work Sans"}
        fontWeight={"bold"}
        color={useColorModeValue("gray.500", "gray.400")}
      >
        See why over{" "}
        <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
          150,000+
        </chakra.strong>{" "}
        influencers use EEZY to manage their social media content!
      </chakra.h2>

      <Center>
        <Stack direction={["column", "row"]} spacing="24px">
          <SimpleGrid
            columns={{ base: 1, xl: 3, md: 2 }}
            spacing={"20"}
            mt={16}
            mx={"auto"}
          >
            {testimonials.map((cardInfo, index) => (
              <Box
                maxW={"270px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                bg={"#FFFFFF"}
              >
                <Image
                  h={"120px"}
                  w={"full"}
                  src={"./images/bg2.png"}
                  objectFit={"cover"}
                />
                <Flex justify={"center"} mt={-12}>
                  <Avatar
                    size={"xl"}
                    src={cardInfo.avatar}
                    alt={"Author"}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={"center"} mb={5}>
                    <Text color={"gray.500"} align={"center"}>
                      {cardInfo.content}
                    </Text>
                  </Stack>

                  <Stack direction={"column"} justify={"center"} spacing={3}>
                    <Stack spacing={0} align={"center"}>
                      <Heading
                        fontSize={"2xl"}
                        fontWeight={500}
                        fontFamily={"body"}
                      >
                        {cardInfo.name}
                      </Heading>
                    </Stack>
                    <Stack spacing={0} align={"center"}>
                      <Text color={"gray.500"}>{cardInfo.role}</Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Center>
      {/* </Box> */}
    </Flex>
  );
}
