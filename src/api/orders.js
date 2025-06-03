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

async function getOrderByUser(userId, status ="pending") {
    return await api.get(`/api/orders/user/${userId}?status=${status}`);
}

async function deleteOrder(id) {
    return await api.delete(`/api/orders/${id}`);
}



export { createOrder, getOrders, getOrderByUser, checkoutOrder, confirmOrder, deleteOrder };
