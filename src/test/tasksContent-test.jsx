import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const TasksContentTest = () => {
  return (
    <Box m={6}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card bg="#FAF0CA" borderEndStartRadius="40px" shadow="md">
          <CardHeader>
            <Heading size="md">Task 1</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              quo.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="green">View Task</Button>
          </CardFooter>
        </Card>
        <Card
          bg="#FAF0CA"
          borderEndStartRadius="40px"
          shadow="md"
          maxHeight="300px"
        >
          <CardHeader>
            <Heading size="md">Task 2</Heading>
          </CardHeader>
          <CardBody>
            <Text noOfLines={[1, 2, 3]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              delectus officia fugit, voluptatum quod vel nemo beatae in
              consequatur, esse debitis libero quibusdam quaerat nobis eos
              explicabo dolores provident alias tenetur itaque placeat tempora
              soluta. Ipsum consequatur quasi, exercitationem sunt sed ipsa
              totam iste blanditiis enim dolore, sit obcaecati asperiores ipsam
              fuga a tenetur! Rem voluptatem incidunt consectetur perferendis
              quas tempore commodi doloribus error temporibus illo eligendi,
              exercitationem quasi corporis, eum amet dignissimos quaerat fugit
              illum molestiae reiciendis corrupti? Quis excepturi ut libero fuga
              voluptatem est neque! Minus ad modi excepturi aperiam delectus
              rerum vitae aut asperiores minima numquam tempore libero iusto
              repellendus, nulla possimus itaque ipsa quidem neque omnis
              expedita earum nam iste praesentium laborum. Distinctio,
              molestias! Aliquid, veritatis, incidunt, nam reiciendis nulla
              explicabo pariatur ea obcaecati magni quod facilis minus nihil. At
              eos nisi illum suscipit consequatur repellat incidunt facere nemo
              id. Corrupti nam consequatur, unde voluptatum ullam a assumenda
              officiis, ex, delectus expedita tempora asperiores? Temporibus
              iusto ipsam beatae accusantium velit, accusamus laudantium tempora
              ullam ipsa facilis sint aperiam explicabo quae eum, consectetur
              odio odit sed quidem! Ratione sit asperiores labore tempore minus
              rem natus doloremque odio quam harum magni, magnam unde, expedita
              fugit saepe sed vero!
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="green">View Task</Button>
          </CardFooter>
        </Card>
        <Card bg="#FAF0CA" borderEndStartRadius="40px" shadow="md">
          <CardHeader>
            <Heading size="md">Task 3</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              quo.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="green">View Task</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default TasksContentTest;
