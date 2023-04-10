import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/CommonComponents/Header";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Dispatch } from "redux";
import {
  categoryDataFailure,
  categoryDataLoading,
  categoryDataSuccess,
} from "../../Redux/CategoryReducer/Action";
import { getAllCategoryDataService } from "../../Services/UserSideServices/GetCategoryServices/GetCategoryService";
import {
  adminListByCategoryFailure,
  adminListByCategoryLoading,
  adminListByCategorySuccess,
} from "@/Redux/AdminListByCategoryReducer/Action";
import { getAlladminListByCategoryService } from "../../Services/UserSideServices/GetAllAdminListByCategoryReducer/GetAdminListByCategoryReducer";
let title: string;
let buttonName: string;
const BookOneOnOne = () => {
  const [categoryType, setCategoryType] = useState("");
  const categories = useSelector(
    (state: RootState) => state.CategoryReducer.categories
  );
  const admins = useSelector(
    (state: RootState) => state.AdminListByCategoryReducer.admins
  );
  const categoryDispatch: Dispatch<
    categoryDataSuccess | categoryDataLoading | categoryDataFailure
  > = useDispatch();
  const adminListDispatch: Dispatch<
    | adminListByCategorySuccess
    | adminListByCategoryFailure
    | adminListByCategoryLoading
  > = useDispatch();
  useEffect(() => {
    getAllCategoryDataService()(categoryDispatch);
  }, []);
  console.log("cate", categoryType);
  useEffect(() => {
    if (categoryType && admins?.length === 0) {
      getAlladminListByCategoryService(categoryType)(adminListDispatch);
      setCategoryType("");
      console.log("cate", categoryType);
    }
  }, [categoryType]);

  console.log("categories", categories);
  console.log("admins", admins);
  return (
    <div>
      <Navbar />
      <Header title={"Availabilities"} buttonName={"Back"} />
      <main>
        <Box
          w={"100%"}
          h={"100vh"}
          bg={"#f1f1f1"}
          border={"1px solid #f1f1f1 "}
        >
          <Box
            w={"75%"}
            h={"auto"}
            m={"auto"}
           
            mt={"50px"}
            bg={"white"}
            p={"100px"}
            borderRadius={"10px"}
          >
            <Flex justifyContent={"space-between"}>
              <Box>
                <Box
                  w={"45%"}
                  
                  borderRadius={"10px"}
                  bgColor={"#e71515cd"}
                  textAlign={"center"}
                >
                  <Text
                    p={"5px"}
                    fontSize={"20px"}
                    fontFamily={"sans-serif"}
                    fontWeight={"500"}
                    color={"white"}
                  >
                    Category List
                  </Text>
                </Box>
                <Flex
                  padding={"20px"}
                 
                  flexWrap={"wrap"}
                  w={"45%"}
                  justifyContent={"space-between"}
                  gap={3}
                  alignItems={"center"}
                >
                  {categories &&
                    categories.map((item: string, index: number) => {
                      return (
                        <Box key={index}>
                          <Button
                            colorScheme="blue"
                            onClick={() => setCategoryType(item)}
                          >
                            {item}
                          </Button>
                        </Box>
                      );
                    })}
                </Flex>
              </Box>
              <Box>
                <Box
                  w={"100%"}
                  border={"1px solid red"}
                  borderRadius={"10px"}
                  bgColor={"#e71515cd"}
                  textAlign={"center"}
                >
                  <Text
                    p={"5px"}
                    fontSize={"20px"}
                    fontFamily={"sans-serif"}
                    fontWeight={"500"}
                    color={"white"}
                  >
                    Admin List
                  </Text>
                </Box>
                <Flex
                    
                  w={"50%"}
                  padding={"20px"}
                  gap={2}
                  flexWrap={"wrap"}
                >
                  {admins.length > 0 &&
                    admins.map((item: any, index: number) => {
                      return (
                        <Box key={index}>
                          <Link to={`/book-one-on-one/admin/${item.id}`}>
                            <Button colorScheme="blue">{item.name}</Button>
                          </Link>
                        </Box>
                      );
                    })}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default BookOneOnOne;
