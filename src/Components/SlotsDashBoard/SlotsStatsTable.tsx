import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

interface InterviewResult {
  meetingStatus: string;
  count: number;
}

const SlotsStatsTable = ({ totalInterviews }: any) => {
  return (
    <React.Fragment>
      <Box>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Status</Th>
              <Th isNumeric>Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Total Slots</Td>
              <Td isNumeric>{totalInterviews?.totalSlots}</Td>
            </Tr>
            {totalInterviews?.results?.map(
              (el: InterviewResult, index: number) => (
                <Tr key={index}>
                  {el.meetingStatus === "B" && (
                    <>
                      <Td>Slots Booked</Td>

                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "U" && (
                    <>
                      <Td>Slots Unbooked</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "D" && (
                    <>
                      <Td>Slots Deleted</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </Box>
    </React.Fragment>
  );
};

export default SlotsStatsTable;