import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";

const TasksContentTest = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quo.",
    },
    {
      id: 2,
      title: "Task 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus officia fugit, voluptatum quod vel nemo beatae in consequatur, esse debitis libero quibusdam quaerat nobis eos explicabo dolores provident alias tenetur itaque placeat tempora soluta. Ipsum consequatur quasi, exercitationem sunt sed ipsa totam iste blanditiis enim dolore, sit obcaecati asperiores ipsam fuga a tenetur! Rem voluptatem incidunt consectetur perferendis quas tempore commodi doloribus error temporibus illo eligendi, exercitationem quasi corporis, eum amet dignissimos quaerat fugit illum molestiae reiciendis corrupti? Quis excepturi ut libero fuga voluptatem est neque! Minus ad modi excepturi aperiam delectus rerum vitae aut asperiores minima numquam tempore libero iusto repellendus, nulla possimus itaque ipsa quidem neque omnis expedita earum nam iste praesentium laborum. Distinctio, molestias! Aliquid, veritatis, incidunt, nam reiciendis nulla explicabo pariatur ea obcaecati magni quod facilis minus nihil. At eos nisi illum suscipit consequatur repellat incidunt facere nemo id. Corrupti nam consequatur, unde voluptatum ullam a assumenda officiis, ex, delectus expedita tempora asperiores? Temporibus iusto ipsam beatae accusantium velit, accusamus laudantium tempora ullam ipsa facilis sint aperiam explicabo quae eum, consectetur odio odit sed quidem! Ratione sit asperiores labore tempore minus rem natus doloremque odio quam harum magni, magnam unde, expedita fugit saepe sed vero!",
    },
    {
      id: 3,
      title: "Task 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quo.",
    },
  ];

  return (
    <Box m={6}>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {tasks.map((task) => (
          <Card
            key={task.id}
            bg="#FAF0CA"
            borderEndStartRadius="40px"
            shadow="md"
          >
            <CardHeader>
              <HStack>
                <Heading size="md">{task.title}</Heading>
                <Spacer />
                <Text color="green">Complete</Text>
              </HStack>
            </CardHeader>
            <CardBody>
              <Text noOfLines={[1, 2, 3]}>{task.description}</Text>
            </CardBody>
            <CardFooter>
              <HStack w="100%">
                <Button colorScheme="facebook">View Task</Button>
                <Spacer />
                <Text as="sub">02-20-2024</Text>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TasksContentTest;
