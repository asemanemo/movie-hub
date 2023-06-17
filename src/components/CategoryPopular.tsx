import { Button, Stack, WrapItem } from "@chakra-ui/react";
import usePopular from "../hooks/usePopular";

const CategoryPopular = () => {
  const { popular } = usePopular();

  return (
    <WrapItem>
      <Stack align="left" paddingTop={5} color="gray.400" fontFamily="heading">
        <Button colorScheme="orange">Now Playing</Button>
        <Button>Popular</Button>
        <Button>Top Rated</Button>
        <Button>Upcoming</Button>
        <ul>
          {popular.map((popular) => (
            <li key={popular.id}>{popular.title}</li>
          ))}
        </ul>
      </Stack>
    </WrapItem>
  );
};

export default CategoryPopular;
