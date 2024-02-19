import { Grid, GridItem } from "@chakra-ui/react";
import SidebarTest from "./sidebar-test";
import HeaderTest from "./header-test";
import TasksContentTest from "./tasksContent-test";

const NewTasks = () => {
  return (
    <Grid
      templateAreas={`"nav header"
                  "nav main"`}
      gridTemplateRows={"60px 60px 1fr"}
      gridTemplateColumns={"200px 1fr"}
      h="100%"
      gap="0"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <HeaderTest />
      </GridItem>
      <GridItem area={"nav"}>
        <SidebarTest />
      </GridItem>
      <GridItem area={"main"}>
        <TasksContentTest />
      </GridItem>
    </Grid>
  );
};

export default NewTasks;
