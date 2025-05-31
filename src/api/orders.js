import api from "./api";

async function createOrder(data) {
    return await api.post("/api/orders", data);
}



export { createOrder };