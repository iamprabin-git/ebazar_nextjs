import api from "./api";


async function checkoutOrder(id, data) {
    return await api.put(`/api/orders/${id}/checkout`, data);
}

async function confirmOrder(id, data) {
    return await api.put(`/api/orders/${id}/confirm`, data);
}

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




export { createOrder, getOrders, getOrderByUser, checkoutOrder, confirmOrder };
