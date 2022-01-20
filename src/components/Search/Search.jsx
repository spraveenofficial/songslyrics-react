import { Button, Flex, Input, Text, Spinner } from "@chakra-ui/react";
import { useState } from "react";
export default function Search() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => setLoading(!loading);
  return (
    <>
      {/* <Text d={{ base: "none", md: "block" }} mb="8px">
        Search
      </Text> */}
      <Flex flexDirection={{ md: "row", base: "column" }}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Search Favorite Lyrics"
          size="md"
          marginRight={{ base: 0, md: "10px" }}
        />
        <Button
          onClick={handleSubmit}
          colorScheme="brand"
          marginTop={{ base: "10px", md: "0px" }}
        >
          {loading ? <Spinner size="xs" /> : "Search"}
        </Button>
      </Flex>
    </>
  );
}
