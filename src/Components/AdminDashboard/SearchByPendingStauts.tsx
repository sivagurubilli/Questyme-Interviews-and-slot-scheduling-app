import React, { useCallback, useEffect, useState } from 'react'
import {
    Box,
    Button,
    Divider,
    Flex,
    FormLabel,
    Grid,
    SkeletonCircle,
    SkeletonText,
    Text,
    useToast,
  } from "@chakra-ui/react";
import { useSearch } from '../../utils/SetParams';
import AdminInterviewBox from '../AdminInterviews/InterviewsComponent';
import { GetFutureInterviewService } from "../../Services/UserSideServices/GetInterviewsServices";
import { useLocation, useNavigate } from "react-router-dom";



const SearchByPendingStauts = () => {
    const [futureInerviews, setfutureInerviews] = useState([]);
    const [colorScheme,setColorScheme] = useState({
        "pending":"blue",
        "compleated":"blue"
      })
    const toast = useToast();
    const userDetails = JSON.parse(localStorage.getItem("userDetails") || "{}");
    const id = userDetails?.user?.id;
    const token = userDetails?.token;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
   
      const [search, updateSearch] = useSearch();
      const navigate = useNavigate()

      
      const GetEvents = useCallback(async () => {
        try {
          const response = await GetFutureInterviewService(id, token);
          if (response.length) {
            setfutureInerviews(response.data);
          }
        } catch (error) {
          toast({
            title: "Something Went Wrong",
            status: "error",
            position: "top",
            duration: 2000,
            isClosable: true,
          });
        }
      }, [id, token, toast]);
    
      useEffect(() => {
        GetEvents();
      }, [GetEvents]);


    const Pending =()=>{
        setColorScheme({pending:"green",compleated:"blue"})
      updateSearch({
        ...search,
        "meeting-status":"pending"
      })
      }

      const Compleated =()=>{
        setColorScheme({pending:"blue",compleated:"green"})
        updateSearch({
          ...search,
          "meeting-status":"compleated"
        })
        }
    
        const Clear =()=>{
          setColorScheme({pending:"blue",compleated:"blue"})
          updateSearch({})
          navigate("")
        }


  return (
    <div>
        
        <Box
        w="80%"
        ml="10%"
        mt="30px"
        minH="200px"
        h="auto"
        p="2%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
           <Flex justifyContent="flex-end">
        <FormLabel mr="20px" mt="7px" >Meeting Status :- </FormLabel>
          <Button colorScheme={colorScheme.pending} onClick={Pending}>Pending</Button>
          <Button colorScheme={colorScheme.compleated} ml="20px" onClick={Compleated}>Compleated</Button>
          <Button ml="20px" colorScheme="blue" onClick={Clear}>Clear</Button>
        </Flex>
        <Divider mt="10px" mb="10px" />
        {futureInerviews?.length <= 0 ? (
          <Box>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        ) : (
          <Grid
            mt={4}
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr",
            }}
            gap={4}
          >
            {futureInerviews?.map((el) => (
              <Box key={el}>
                <AdminInterviewBox event={el} GetEvents={GetEvents} />
              </Box>
            ))}
          </Grid>
        )}
  </Box>
    </div>
  )
}

export default SearchByPendingStauts