import React from "react";
import { Box, Button, Flex, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Iinterviews } from "../../../Services/AdminSideServices/GetEventsInterface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../../Redux/store'
import { cancelSingleInterview } from "../../../Redux/CancelInterviewReducer/ActionCreators";


interface InterviewProp {
    interview: Iinterviews;
    id: any;
}

const DetailPageNav = ({ interview, id }: InterviewProp) => {
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.AuthReducer.token)


    const handleDelete = () => {
        cancelSingleInterview(id, token)(dispatch).then((res: any) => {
            if (res.status == 200) {
                console.log("yes")
                toast({
                    title: "Interview Canceled Successfully",
                    status: "success",
                    position: "top",
                    duration: 2000,
                    isClosable: true,
                });
                navigate(-1)
            }
        }).catch((err: any) => {
            toast({
                title: `Somthing Went Wrong`,
                status: "error",
                position: "top",
                duration: 2000,
                isClosable: true,
            })
        })
    }

    const handleUpdate = () => {
        navigate(`/admin/single-interview/edit/${id}`,{ state: { data: interview} })
    }

    return (
        <div>
            <Box position="relative" h="auto" marginTop="2px" bg="whiteAlpha.900" w="100%">
                <Box boxShadow="sm">
                    <Flex position={"relative"} w={"97%"} align="center" m="auto" h={"60px"} justifyContent={"space-around"} color={"gray.600"}>
                        <Button colorScheme="blue" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                        <Flex gap={"20px"}>
                            <Button colorScheme="blue" onClick={handleUpdate}>
                                Update
                            </Button>
                            <Button colorScheme="blue" onClick={handleDelete}>
                                Cancel
                            </Button>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
        </div>
    );
};

export default DetailPageNav;
