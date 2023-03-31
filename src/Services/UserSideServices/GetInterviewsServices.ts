import axios from "axios";

export async function GetAllInterviewService(){
    try{
        const response = await axios.get("http://localhost:8080/interviews");
        return response.data
    }catch(error:any){
        return error.response
    }
}