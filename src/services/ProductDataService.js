import http from "../http-common";

class ProductDataService {
    getAll() {
        return http.get("/products");
    }

    getUserProducts(userId) {
        return http.get(`/products/user/${userId}`);
    }

    getAllProducts() {
        return http.get("/products/all");
    }

    getNotRelatedProducts(userId) {
        return http.get(`/products/not-related/${userId}`);
    }

    get(id) {
        return http.get(`/products/${id}`);
    }

    create(data) {
        return http.post("/products", data, { headers: {'Content-Type': 'multipart/form-data'}});
    }


    delete(id) {
        return http.delete(`/products/${id}`);
    }

    findByTitle(title) {
        return http.get(`/products?title=${title}`);
    }

    // Optional: You can add more specific queries based on your API
}

export default new ProductDataService();
