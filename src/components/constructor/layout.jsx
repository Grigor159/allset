import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../globals/header";
import { TopPart } from "./topPart";
import { Footer } from "../globals/footer";
import { Loader } from "../globals/loader";
import { ScrollToTop } from "../globals/scrollToTop";

const Layout = () => {
  return (
    <Box bg="#F9FAFB">
      <Header />
      <TopPart />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </Box>
  );
};

export default Layout;
