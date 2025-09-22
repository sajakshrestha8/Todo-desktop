import { AxiosError } from "axios";
import axiosInstance from "../api/Interceptor"
import { ITasks, IUpdateTasks } from "../types/tasks.interface";

export const taskService = {
  getAllTasks: async () => {
    try {
      const res = await axiosInstance.get("task/alltasks");
      return res.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
      console.log(error);
    }
  },

  addTasks: async ({ title, description, priority, status, dueDate }: ITasks) => {
    try {
      const { data } = await axiosInstance.post("task/addtask", {
        title,
        description,
        priority,
        status,
        dueDate,
      });
      
      alert(data.message);

    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
      console.log(error);
    }
  },

  updateTask: async ({ id, formData }: {id: number, formData: IUpdateTasks}) => {
    try {
      const response = await axiosInstance.put(`task/updatetasks/${id}`, formData);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  deleteTask: async ({ id }: { id: number; }) => {
    try {
      const response = await axiosInstance.delete(`task/deletetasks/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};