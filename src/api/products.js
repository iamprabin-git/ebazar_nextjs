import config from '@/config';
import axios from 'axios';
import api from './api';
import getFormatedParams from '@/helpers/formatSearchParams';

 async function createProduct(data) {
  return await api.post('/api/products', data
  );
}
async function getProducts(searchParams) {
   const query = getFormatedParams(searchParams);
    return await axios.get(`${config.apiUrl}/api/products?${query}`);
}

async function getProductByUser() {
    return await api.get(`/api/products/users`);
}

async function getProductById(id) {
    return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getCategories() {
    return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function getBrands() {
    return await axios.get(`${config.apiUrl}/api/products/brands`);
}

async function updateProduct(id, data) {
    return await api.put(`/api/products/${id}`, data);
}

async function deleteProduct(id) {
    return await api.delete(`/api/products/${id}`);
}


    


export {
    getProducts,
    getProductById,
    getProductByUser,
    getCategories,
    createProduct,
    updateProduct,
    deleteProduct,
    getBrands,
};
