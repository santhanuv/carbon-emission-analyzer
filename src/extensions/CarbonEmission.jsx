import {
  Heading,
  Box,
  Flex,
  Text,
  Divider,
  Spacer,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NetworkMonitor from "./NetworkMonitor";
import { co2 } from "@tgwf/co2";

const CarbonEmission = () => {
  const [totalBytes, setTotalBytes] = useState(0);
  const [value, setValue] = useState(0);
  const [finished, setFinished] = useState(false);

  const emissions = new co2();

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        console.log(finished);
        if (!finished) {
          const data = await chrome.storage.local.get(["data_used"]);
          console.log("data: ", data);
          setTotalBytes(data.data_used);
          const estmiatedCo2 = await emissions
            .perByte(data.data_used, false)
            .toFixed(3);
          setValue(estmiatedCo2);
          setFinished(true);
        }
      })();
    }, 100);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <Box
      background="#101010"
      w="400px"
      paddingX="60px"
      borderRadius="2px"
      outline={"0px"}
      border={"0px"}
    >
      <Heading
        color="#6FC898"
        textAlign="center"
        paddingTop="30px"
        marginBottom="60px"
      >
        EMEX
      </Heading>
      <Flex alignItems="center" gap={"16px"}>
        <Box width={"150px"}>
          <Text color="white">
            This page loaded in{" "}
            <span>
              <Text fontWeight="bold" fontSize="32px">
                1s
              </Text>
            </span>
          </Text>
        </Box>
        <Spacer />
        <Divider
          orientation="vertical"
          color="white"
          height="120px"
          width="1px"
          background="white"
        />

        <Spacer />
        <Box width={"150px"}>
          <Text color="white">
            Emitted CO2 of
            <span>
              <Text fontWeight="bold" fontSize="32px">
                {value}g
              </Text>
            </span>
          </Text>
        </Box>
      </Flex>

      <Box textAlign="center" paddingY="60px">
        <Button background="#6FC898" fontWeight="bold" fontSize="16px">
          View Dashboard
        </Button>
      </Box>
    </Box>
  );
};

export default CarbonEmission;
