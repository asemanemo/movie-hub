import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton height="50vh" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
