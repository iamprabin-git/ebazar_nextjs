import api from "./api";

// Create a new order
async function createOrder(data) {
    return await api.post("/api/orders", data);
}

// Get orders with optional query params
async function getOrders() {
    return await api.get("/api/orders");
}

async function getOrderByUser(userId) {
    return await api.get(`/api/orders/user/${userId}`);
}

export { createOrder, getOrders, getOrderByUser };
