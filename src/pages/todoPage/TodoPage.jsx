import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TodoContent from "./TodoContent";

const TodoPage = () => {
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
        <Header />
      </GridItem>
      <GridItem area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem area={"main"}>
        <TodoContent />
      </GridItem>
    </Grid>
  );
};

export default TodoPage;
