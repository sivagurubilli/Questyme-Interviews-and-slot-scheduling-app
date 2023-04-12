import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

interface InterviewResult {
  meetingStatus: string;
  count: number;
}

const TableForStats = ({ totalInterviews }: any) => {
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
              <Td>Total Interviews </Td>
              <Td isNumeric>{totalInterviews?.totalInterviews}</Td>
            </Tr>
            {totalInterviews?.results?.map(
              (el: InterviewResult, index: number) => (
                <Tr key={index}>
                  {el.meetingStatus === "E" && (
                    <>
                      <Td>Interviews Completed</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "P" && (
                    <>
                      <Td>Interviews Pending</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "S" && (
                    <>
                      <Td>Interviews Started</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "C" && (
                    <>
                      <Td>Interviews Cancelled</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "SS" && (
                    <>
                      <Td>Interviews Started by Student</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "IS" && (
                    <>
                      <Td>Interviews Started by Interviewer</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "SE" && (
                    <>
                      <Td>Interviews Ended by Student</Td>
                      <Td isNumeric>{el.count}</Td>
                    </>
                  )}

                  {el.meetingStatus === "IE" && (
                    <>
                      <Td>Interviews Ended by Interviewer</Td>
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

export default TableForStats;
