import api from "./api";

export const getSetting = async (key) => {
    try {
        const response = await api.get(`setting/find/${key}`);
        return { status: "success", data: response.data.data, message: "success get data" };
    } catch (error) {
        return { status: "error", data: null, message: `failed to load ${key}: ${error.message}` };
    }
};
