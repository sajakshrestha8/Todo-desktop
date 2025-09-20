import { AxiosError } from "axios";
import axiosInstance from "../api/Interceptor"

export const taskService = {
    getAllTasks: async () => {
        try {
            const res = await axiosInstance.get("task/alltasks");
            return res.data.data;
            
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data);
            }
            console.log(error);
        }
    }
}