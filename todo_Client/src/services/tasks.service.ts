import { AxiosError } from "axios";
import axiosInstance from "../api/Interceptor"
import { IAddTask, IUpdateTasks } from "../types/tasks.interface";
import { toast } from "react-toastify";

export const taskService = {
  getAllTasks: async () => {
    try {
      const res = await axiosInstance.get("task/alltasks");
      return res.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      toast.error(error.message);
    } 
  },

  addTasks: async ({ title }: { title: string }) => {
    try {
      const { data } = await axiosInstance.post("task/addtask", {
        title,
      });
      
      return data.message;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      toast.error(error.message);
    }
  },

  updateTask: async ({ id, formData }: {id: number, formData: IUpdateTasks}) => {
    try {
      const response = await axiosInstance.put(`task/updatetasks/${id}`, formData);
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      toast.error(error.response.data.message);
    }
  },

  deleteTask: async ({ id }: { id: number; }) => {
    try {
      const response = await axiosInstance.delete(`task/deletetasks/${id}`);
      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      toast.error(error.message);
    }
  },

  isTaskCompleted: async ({ id } : {id: number; }) => {
    try {
      const response = await axiosInstance.put(`task/toggleSelect/${id}`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
      toast.error(error.message);
    }
  }
};