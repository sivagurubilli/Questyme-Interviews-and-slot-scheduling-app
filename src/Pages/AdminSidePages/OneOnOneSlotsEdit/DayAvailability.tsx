import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const DayAvailability = () => {
  const [checkBoxVal, setCheckBoxVal] = useState( true

  );
const DayArrays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  return (
    <div>

        {DayArrays.map((el)=>(

      <Box>
      <Flex justifyContent="space-between"  w="100%">
        <Flex  w="60%">
          <Checkbox
            isChecked={checkBoxVal}
            onChange={(e) => setCheckBoxVal(e.target.checked)}
          />
          <Box  w="70px">
          <FormLabel mt="8px" ml="10px">
            {el}
          </FormLabel>
          </Box>
        </Flex>
        {checkBoxVal ? (
          <Box >
            <Flex>
              <Input mt="5px" w="30%" />{" "}
              <Box mt="7px" ml="10px" mr="10px">
                -
              </Box>{" "}
              <Input mt="5px" w="30%" />
              <Box mt="10px" ml="10px">
                {" "}
                <i className="fa-solid fa-trash-can"></i>{" "}
              </Box>
            </Flex>
          </Box>
        ) : (
            <Box ml="20%" mt="8px">
          
            Unavailable
          
          </Box>
        )}
         <Button variant="unstyled">
        <i className="fa-solid fa-plus"></i>
        </Button>
       
      </Flex>
       <Divider mt="10px" mb="10px"/>
      </Box>
))}



    </div>
  );
};

export default DayAvailability;
