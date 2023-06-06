import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const color = rating >= 7 ? "green" : rating > 6 ? "orange" : "red";

  return (
    <Badge
      colorScheme={color}
      fontSize="17px"
      paddingY={1.5}
      paddingX={2}
      borderRadius={6}
    >
      {rating}
    </Badge>
  );
};

export default Rating;
