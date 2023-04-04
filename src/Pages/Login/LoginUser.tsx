import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginService } from "../../Services/AuthService";
import { Dispatch } from "redux";
import {
  Action,
  isLoginFailure,
  isLoginSuccess,
} from "../../Redux/AuthReducer/Action";
import { Box, Flex, Image, Text, Button, Checkbox } from "@chakra-ui/react";
import { ActionTypes } from "../../Redux/AuthReducer/ActionTypes";
// commented code i will use latter
const SignupSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),

  //    password:  Yup
  //    .string()
  //    .required("Password is required")
  //    .min(8, "Password must be 8 characters long")
  //    .matches(/[0-9]/, "Password requires a number")
  //    .matches(/[A-Z]/, "Password requires a uppercase letter")
  //    .matches(/[a-z]/, "Password requires a lowercase letter")
  //    .matches(/[^\w]/, "Password requires a symbol"),
});
export interface LoginData {
  username: string;
  password: string;
}
export const LoginUser = () => {
  const dispatch: Dispatch<isLoginSuccess | isLoginFailure> = useDispatch();
  return (
    <Box bg={"#fafafa"} w={"full"} h={"100vh"} mt={"-50px"} p={"100px"}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => {
          console.log("hi");
          // same shape as initial values
          const payload: LoginData = {
            username: values.username,
            password: values.password,
          };

          loginService(payload)(dispatch)
            .then((res) => {
              if (res == ActionTypes.LOGIN_SUCCESS) {
                console.log("success");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              m={"auto"}
              w={"450px"}
              h={"300px"}
              mt={"50px"}
            >
              <Box m={"auto"} mt={"-1px"} mb={"-1px"}>
                <Image
                  w={"250px"}
                  src="https://masaischool.com/img/navbar/logo.svg"
                  alt="masai logo"
                />
              </Box>

              <Box
                h={"300px"}
                display={"flex"}
                flexDirection={"column"}
                bg={"white"}
                gap={"15px"}
                borderRadius={"10px"}
                p={"20px"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              >
                <Box>
                  <Text
                    fontSize={"16px"}
                    color={"gray.700"}
                    fontFamily={"sans-serif"}
                  >
                    Email
                  </Text>
                  <Box
                    border={"1px solid black"}
                    borderRadius={"10px"}
                    w={"100%"}
                    h={"40px"}
                  >
                    <Field
                      name="username"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        color: "gray",
                        paddingLeft: "10px",
                        fontSize: "18px",
                      }}
                    />
                    {errors.username && touched.username ? (
                      <div>{errors.username}</div>
                    ) : null}
                  </Box>
                </Box>
                <Box>
                  <Text
                    fontSize={"16px"}
                    fontFamily={"sans-serif"}
                    color={"gray.700"}
                  >
                    Password
                  </Text>
                  <Box
                    border={"1px solid black"}
                    borderRadius={"10px"}
                    w={"100%"}
                    h={"40px"}
                  >
                    <Field
                      name="password"
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        color: "gray",
                        paddingLeft: "10px",
                        fontSize: "18px",
                      }}
                    />
                    {errors.password && touched.password ? (
                      <div>{errors.password}</div>
                    ) : null}
                    
                  </Box>
                  <Flex mt={"10px"}>
                      <Checkbox
                        w={"25px"}
                        h={"25px"}
                        color={"black"}
                        colorScheme="green"
                      />
                      <Text>Remember me</Text>
                    </Flex>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    size={"md"}
                    float={"right"}
                    variant={"solid"}
                    bg={"black"}
                    color={"white"}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
