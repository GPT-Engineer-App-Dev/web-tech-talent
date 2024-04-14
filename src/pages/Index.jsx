import { Box, Button, Container, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaUserCheck } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.50">
      {/* Hero */}
      <Box bg="purple.600" color="white" py={24}>
        <Container maxW="container.lg">
          <Stack spacing={6} align="center" textAlign="center">
            <Heading as="h1" size="3xl">
              Hire Top Software Talent
            </Heading>
            <Text fontSize="xl" maxW="500px">
              Particles connects companies with world-class developers and engineers. Accelerate your projects and build your dream team.
            </Text>
            <Button colorScheme="white" color="purple.600" size="lg">
              View Developer Listings
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* How It Works */}
      <Container py={20} maxW="container.lg">
        <Heading textAlign="center" size="xl" mb={16}>
          How It Works
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {/* Step 1 */}
          <Stack spacing={6} align="center" textAlign="center">
            <Box color="purple.600" fontSize="4xl">
              <FaSearch />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              1. Search for talent
            </Text>
            <Text fontSize="lg">Browse our network of top developers from around the world. Filter by skills, experience, location and more.</Text>
          </Stack>

          {/* Step 2 */}
          <Stack spacing={6} align="center" textAlign="center">
            <Box color="purple.600" fontSize="4xl">
              <FaUserCheck />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              2. Review profiles
            </Text>
            <Text fontSize="lg">View detailed profiles, work history, and code samples. Select your top candidates to interview.</Text>
          </Stack>

          {/* Step 3 */}
          <Stack spacing={6} align="center" textAlign="center">
            <Box color="purple.600" fontSize="4xl">
              <FaCode />
            </Box>
            <Text fontWeight="bold" fontSize="2xl">
              3. Contact developers
            </Text>
            <Text fontSize="lg">Connect directly with developers to discuss your project. Hire them on a contract or full-time basis.</Text>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* CTA */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack direction={{ base: "column", md: "row" }} spacing={8} align="center" justify="center">
            <Box>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nJTIwdG9nZXRoZXJ8ZW58MHx8fHwxNzEzMDU3NDY5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developers working together" />
            </Box>
            <Stack spacing={6} maxW="500px">
              <Heading size="xl">Start Building Your Team</Heading>
              <Text fontSize="lg">Join hundreds of companies using Particles to hire world-class software developers and engineers.</Text>
              <Button colorScheme="purple" size="lg">
                View Developer Listings
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
