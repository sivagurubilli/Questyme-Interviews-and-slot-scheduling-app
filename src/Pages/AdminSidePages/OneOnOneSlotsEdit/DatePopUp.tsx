import { Box } from '@chakra-ui/react';
import React ,{useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useMediaQuery
} from "@chakra-ui/react";

const DatePopUp = ({ isOpen, setIsOpen }: any) => {
  const handleClose = () => setIsOpen(false);
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [startDate, setStartDate] = useState<Date | null>(null);
  return (
    <div>
      <Modal isOpen={isOpen} size="lg" onClose={handleClose}>
       
        <ModalContent>
          <ModalBody  >
           <Box h="300px" >
           <DatePicker selected={startDate} onChange={(date :any) => setStartDate(date)} />
          </Box> 
          </ModalBody>
          <ModalFooter>
            <Button
              h={isLargerThan900 ? "35px" : "auto"}
              color="white"
              bg="rgb(31 41 55)"
              minH="30px"
              ml="20px"
              _hover={{ bg: "rgb(76, 84, 95)" }}
              onClick={handleClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DatePopUp;

