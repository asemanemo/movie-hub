import { Button, Stack, WrapItem } from "@chakra-ui/react";

const CategoryList = () => {
  return (
    <WrapItem>
      <Stack align="left" paddingTop={5} color="gray.400" fontFamily="heading">
        <Button colorScheme="orange">Now Playing</Button>
        <Button>Popular</Button>
        <Button>Top Rated</Button>
        <Button>Upcoming</Button>
      </Stack>
    </WrapItem>
  );
};

export default CategoryList;
