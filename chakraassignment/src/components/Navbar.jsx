import React from "react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const Navbar = () => {
  // let popoverBtn = {
  //   background: 'none',
  //   _hover: PopoverContent,
  // }
  return (
    <>
      <HStack width="100%" padding="10px">
        <Container maxWidth="-1px">
          <Flex justifyContent="flex-start">
            <Box p="2">
              <Text fontWeight="800" fontSize="2xl">
                Logo
              </Text>
            </Box>

            <Box p="2">
              <Popover trigger="hover" background='none'>
                <PopoverTrigger background='none' >
                  <Button background='none'>Inspiration</Button>
                </PopoverTrigger>
                <PopoverContent background='none'>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Explore Design Work</PopoverHeader>
                  <PopoverBody>
                      Trending Design to inspire to you                  
                  </PopoverBody>
                  <PopoverHeader>New and Noteworthy</PopoverHeader>
                  <PopoverBody>
                      Trending Design to inspire to you                  
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Box p="2">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Button background='none'>FindWork</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Explore Design Work</PopoverHeader>
                  <PopoverBody>
                      Trending Design to inspire to you                  
                  </PopoverBody>
                  <PopoverHeader>New and Noteworthy</PopoverHeader>
                  <PopoverBody>
                      Trending Design to inspire to you                  
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Box p="2">
              <Popover>
                <PopoverTrigger>
                  <Button background='none'>LearnDesign</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>

            <Box p="2">
              <Popover>
                <PopoverTrigger>
                  <Button background='none'>HireDesigners</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>
                    Are you sure you want to have that milkshake?
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Flex>
        </Container>

        <Container>
          <Flex justifyContent="flex-end">
            <Box p="2" paddingTop="4">
              <Button colorScheme="#718096" variant="link">
                Sign In
              </Button>
            </Box>

            <Box p="2">
              <Button colorScheme="pink" variant="solid">
                Sign Up
              </Button>
            </Box>
          </Flex>
        </Container>
      </HStack>
      <hr />
    </>
  );
};

export default Navbar;
