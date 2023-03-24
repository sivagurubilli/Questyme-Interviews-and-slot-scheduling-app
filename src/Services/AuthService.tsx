import axios from "axios";
import { IAuthlogin } from "./AuthInterface";

export async function LoginService(data: IAuthlogin) {
  const { username, password, rememberMe } = data;

  try {
    const response = await axios.post("/api/login", {
      username: username,
      password: password,
    });
    console.log(response);
    if (response.data.token) {
      //setting for remember me in

      if (rememberMe) {
        if (response.data.user.roles[0].name === "STUDENT_USER") {
          localStorage.setItem("username", response.data.user.name);
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userType", response.data.user.roles[0].name);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("batchId", response.data.user.batch.batchId);
          localStorage.setItem(
            "sectionId",
            response.data.user.section.sectionId
          );
        } else {
          localStorage.setItem("username", response.data.user.name);
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("userType", response.data.user.roles[0].name);
          localStorage.setItem("token", response.data.token);
        }
      }
      if (!rememberMe) {
        if (response.data.user.roles[0].name === "STUDENT_USER") {
          sessionStorage.setItem("username", response.data.user.name);
          sessionStorage.setItem("userId", response.data.user.id);
          sessionStorage.setItem("userType", response.data.user.roles[0].name);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("batchId", response.data.user.batch.batchId);
          sessionStorage.setItem(
            "sectionId",
            response.data.user.section.sectionId
          );
        } else {
          sessionStorage.setItem("username", response.data.user.name);
          sessionStorage.setItem("userId", response.data.user.id);
          sessionStorage.setItem("userType", response.data.user.roles[0].name);
          sessionStorage.setItem("token", response.data.token);
        }
      }
    }
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response;
  }
}
