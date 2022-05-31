import React from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <>
      <Box bg="whitesmoke" w="100%" h="100vh">
        <Box bg="white" w="20%" h="100vh" p={4} color="black">
          {/* Logo box */}
          <Box
            // border="1px solid red"
            display="flex"
            align-items="center"
            justify-content="space-between"
            marginBottom="1rem"
          >
            <Text fontSize="xl" fontWeight="700" p="1rem">
              Logo
            </Text>
          </Box>

          {/* Home Box */}
          <Box
            bg="white"
            w="88%"
            color="black"
            // border="1px solid red"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            // align-items="start"
            // justify-content="space-between"
            marginBottom="1rem"
          >
            <Button
              _hover={{ bg: "#42f2f5" }}
              h="48px"
              colorScheme="messenger"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQathHR3o500awgs_dUDl7o8fI4fIpIda142Jp8xx23gvlHiBjC"
              ></Image>

              <Text fontWeight="400" marginLeft="1rem" color="black">
                Home
              </Text>
            </Button>
          </Box>

          {/* Trending Box */}
          <Box
            bg="white"
            w="88%"
            color="black"
            // border="1px solid red"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            marginBottom="1rem"
          >
            <Button
              _hover={{ bg: "#42f2f5" }}
              h="48px"
              colorScheme="messenger"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT4nbZMuLO23QBKxRHIGyLxFE6ifTgz7Z24joJaYJTz3lJaBjeg"
              ></Image>

              <Text fontWeight="400" marginLeft="1rem" color="black">
                Trending
              </Text>
            </Button>
          </Box>

          {/* Explore Box */}
          <Box
            bg="white"
            w="88%"
            color="black"
            // border="1px solid red"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            marginBottom="1rem"
          >
            <Button
              _hover={{ bg: "#42f2f5" }}
              h="48px"
              colorScheme="messenger"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTu1pBKHHJ5cGJdhExnoE643Z7SXmFvPur176n1Ug53j-wDkKr0"
              ></Image>

              <Text fontWeight="400" marginLeft="1rem" color="black">
                Explore Box
              </Text>
            </Button>
          </Box>

          {/* Favourites Box */}
          <Box
            bg="white"
            w="88%"
            color="black"
            // border="1px solid red"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            marginBottom="1rem"
          >
            <Button
              _hover={{ bg: "#42f2f5" }}
              h="48px"
              colorScheme="messenger"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT4CgklsjMQNkW3XDYTAsFmmeXQtbE43PktxanaM32Qjs_e83kc"
              ></Image>

              <Text fontWeight="400" marginLeft="1rem" color="black">
                Favourites
              </Text>
            </Button>
          </Box>

          {/* Settings */}
          <Box
            bg="white"
            w="88%"
            color="black"
            // border="1px solid red"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            marginBottom="1rem"
          >
            <Button
              _hover={{ bg: "#42f2f5" }}
              h="48px"
              colorScheme="messenger"
              variant="ghost"
            >
              <Image
                h="30px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWXne1auIiAKU0N2B_oe7u_dZz1BK6Jl-unTI_PlCuGEfdLJm"
              ></Image>

              <Text fontWeight="400" marginLeft="1rem" color="black">
                Settings
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
