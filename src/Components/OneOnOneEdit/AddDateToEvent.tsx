import { RootState } from "../../Redux/store";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { setDateForEventSchedule } from "../../Services/AdminSideServices/GetEventsService";

const AddDateToEvent = ({
  EventValues,
  setEventValues,
  isDateAdd,
  setDateAdd,
}: any) => {
  const [startDate, setStartDate] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const state = useSelector((state: RootState) => state);
  const AllData = state.SingleEventReducer;
  const toast = useToast();

  const setDate = (date: any) => {
    setStartDate(date);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const AddDate = async () => {
    try {
      const response = await setDateForEventSchedule(startDate);
    } catch (err) {
      toast({
        title: "Something Went Wrong",
        status: "error",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box h="auto" p="20px" mt="5px" border="1px solid grey">
        <Box
          onClick={() => setDateAdd(!isDateAdd)}
          h="auto"
          cursor="pointer"
          mt="5px"
        >
          <Flex justifyContent="space-between">
            <Box>
              {" "}
              <Flex mt="10px">
                <i
                  style={{ marginTop: "4PX" }}
                  className="fa-regular fa-calendar-days"
                ></i>
                <FormLabel ml="10px" color="rgb(75 85 99)">
                  When can people book this event ?
                </FormLabel>
              </Flex>
              <Flex>
                {" "}
                <Text>{AllData?.AllData?.title}</Text>{" "}
                <Text ml="20px">{AllData?.AllData?.duration} Minutes</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Divider mt="20px" mb="20px" h="2px" />
        <Modal isOpen={isOpen} size="lg" onClose={handleClose}>
          <ModalContent>
            <ModalBody>
              <Box h="300px">
                <DatePicker
                  selected={startDate}
                  onChange={(date: any) => setDate(date)}
                />
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                size={["sm", "md"]}
                borderRadius="16px"
                colorScheme="blue"
                onClick={handleClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {startDate && (
          <Text p="20px">
            Scheduled Date For This Event Is :{" "}
            {new Date(startDate).toLocaleDateString("en-US")}
          </Text>
        )}

        <Button
          onClick={() => setIsOpen(true)}
          size={["sm", "md"]}
          borderRadius="16px"
          colorScheme="blue"
        >
          Add Date{" "}
        </Button>
        <Flex justifyContent={"flex-end"}>
          <Box>
            <Button
              variant="link"
              mr="10px"
              onClick={() => setDateAdd(!isDateAdd)}
            >
              Cancel
            </Button>
            <Button
              size={["sm", "md"]}
              borderRadius="16px"
              colorScheme="blue"
              onClick={AddDate}
            >
              Save
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default AddDateToEvent;
