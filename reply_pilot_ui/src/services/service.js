import { axiosInstance } from "./api";

export const generateResponse = async (userRequest) => {
    try {
        const response = await axiosInstance.post("/generate", userRequest);
        return response.data;
    } catch (error) {
        console.error("Unexpected error: ", error);
        throw error;
    }
}