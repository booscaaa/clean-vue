import { fetchProductsRepository } from "../product/repository/fetchProductsRepository";
import { createProductRepository } from "../product/repository/createProductRepository";
import { createProductUseCase } from "../product/domain/usecase/createProductUseCase";
import { fetchProductsUseCase } from "../product/domain/usecase/fetchProductUseCase";
import { ProductController } from "../product/controller/productController";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://clean-go.herokuapp.com",
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.response.use((response) => response, async (err) => {
    const status = err.response ? err.response.status : null

    if (status === 500) {
        // Do something here or on any status code return
    }

    return Promise.reject(err);
});

// Implementation methods from products feature
const fetchProductsRepositoryImpl = fetchProductsRepository(axiosInstance)
const fetchProductsUseCaseImpl = fetchProductsUseCase(fetchProductsRepositoryImpl)
const createProductRepositoryImpl = createProductRepository(axiosInstance)
const createProductUseCaseImpl = createProductUseCase(createProductRepositoryImpl)

const productController = (context: any) => new ProductController(
    context,
    fetchProductsUseCaseImpl,
    createProductUseCaseImpl
)

export { productController }