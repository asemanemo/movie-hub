import { Button, Stack, WrapItem } from "@chakra-ui/react";
import useCategory, { MoviesP } from "../hooks/useCategory";

interface Props {
  onSelectCategory: (moviesP: MoviesP) => void;
}

const CategoryList = ({ onSelectCategory }: Props) => {
  const { moviesP } = useCategory();
  return (
    <WrapItem>
      <Stack align="left" paddingTop={5} color="gray.400" fontFamily="heading">
        <Button colorScheme="orange">Now Playing</Button>

        <Button onClick={() => onSelectCategory(moviesP)}>Popular</Button>
        <Button>Top Rated</Button>
        <Button>Upcoming</Button>
      </Stack>
    </WrapItem>
  );
};

export default CategoryList;
