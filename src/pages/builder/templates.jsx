import { Scroll } from "../../components/ui/scroll";
import { Box, Container, Flex, For } from "@chakra-ui/react";
import { Card } from "../../components/builder/card";
// import { templates } from "../../utils/constants";
import { useGetTanstack } from "../../hooks/useTanstack";
import { Loader } from "../../components/ui/loader";

const Templates = () => {
  const { isLoading, data } = useGetTanstack("templates");
  console.log(data); //

  if (isLoading) return <Loader />;

  return (
    <Scroll animationKey="templates">
      <Box>
        <Container maxW="1104px" px={0}>
          <Flex justify={"space-between"} gap="32px" pt="32px" pb="32px">
            <For each={data}>{(el, index) => <Card key={index} el={el} />}</For>
          </Flex>
        </Container>
      </Box>
    </Scroll>
  );
};

export default Templates;
