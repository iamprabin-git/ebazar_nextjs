import api from "./api";

async function updateUser(id, data) {
    return await api.put(`/api/users/${id}`, data);
}

async function uploadProfileImage(file) {
    return await api.put(`/profile/upload`, file);
}

export { updateUser, uploadProfileImage };