import CONFIG_KEYS from "../../config";
import api from "../middlewares/protected-interceptor";

export const addCategoryService = async (
    endpoint: string,
    categoryInfo: { name: string; description: string }
) => {
    const response = await api.post(
        `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`,
        categoryInfo
    );
    return response;
};

export const getCategoriesService = async (endpoint: string) => {
    const response = await api.get(
        `${CONFIG_KEYS.API_BASE_URL}/${endpoint}`
    );
    return response.data;
};