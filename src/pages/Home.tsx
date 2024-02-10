import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import bg from "../assets/hero.webp";

const Home = () => {
  return (
    <Box as="header" className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
      <Box
        className={`flex items-center lg:order-first order-last justify-center w-full ${useColorModeValue(
          "bg-[#1B98E0]",
          "bg-[#A2FAA3]"
        )}`}
      >
        <Image
          src={bg}
          alt="heroImg"
          loading="lazy"
          className=" w-full h-full object-cover"
        />
      </Box>
      <Box className=" lg:col-span-2 col-span-1">
        <Heading>We help people to realize their dream property</Heading>
      </Box>
    </Box>
  );
};

export default Home;
