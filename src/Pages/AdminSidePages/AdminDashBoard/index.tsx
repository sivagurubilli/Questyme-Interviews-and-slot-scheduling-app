import Navbar from "../../../Components/Navbar/Navbar";
import React, { useEffect, useRef, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import {
  Box,
  CircularProgress,
  Grid,
  Skeleton,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import AdminInterviewBox from "../../../Components/AdminInterviews/InterviewsComponent";
import { GetFutureInterviewService } from "../../../Services/UserSideServices/GetInterviewsServices";
import { useSearchParams } from "react-router-dom";
import SearchComponent from "../../../Components/SearchComponent";

interface SearchQuery {
  [key: string]: string;
}
const AdminDashBoard = () => {
  const [futureInerviews, setfutureInerviews] = useState([]);
  const toast = useToast();

  useEffect(() => {
    GetEvents();
  }, []);

  const GetEvents = async () => {
    try {
      const response = await GetFutureInterviewService("5");
console.log(response)
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
  };

  const useSearch = (): [SearchQuery, (newSearch: SearchQuery) => void] => {
    const [searchParams, setSearchParams] = useSearchParams();

    const prevSearchParamsRef = useRef(searchParams.toString());

    useEffect(() => {
      const currentSearchParams = searchParams.toString();
      if (prevSearchParamsRef.current !== currentSearchParams) {
        prevSearchParamsRef.current = currentSearchParams;
      }
    }, [searchParams]);

    const updateSearch = (newSearch: SearchQuery): void => {
      const params = new URLSearchParams(prevSearchParamsRef.current);

      Object.entries(newSearch).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      setSearchParams(params.toString());
    };

    const currentSearch = Array.from(searchParams.entries()).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

    return [currentSearch, updateSearch];
  };
  const [search, updateSearch] = useSearch();

  return (
    <div className="container">
      <Navbar />
      <DashboardNavbar />
      <Box
        w="80%"
        ml="10%"
        mt="60px"
        minH="200px"
        h="auto"
        p="5%"
        bg="white"
        borderRadius="10px"
        boxShadow="2px 4px 6px rgba(0, 0, 0, 0.1)"
      >
        <SearchComponent search={search} updateSearch={updateSearch} />

        <Grid
          mt={4}
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {futureInerviews?.length > 0 ? (
            futureInerviews?.map((el) => (
              <Box key={el}>
                <AdminInterviewBox event={el} GetEvents={GetEvents} />
              </Box>
            ))
          ) : (
            <Spinner m="50px" p="20px" size="xl" color="blue.500" />
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminDashBoard;
