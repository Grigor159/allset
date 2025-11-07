import { Scroll } from "../../components/ui/scroll";
import { Box } from "@chakra-ui/react";

const Preview = () => {
  return (
    <Scroll animationKey="preview">
      <Box maxW="1104px" px={0}>
        preview
      </Box>
    </Scroll>
  );
};

export default Preview;
