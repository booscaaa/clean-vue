import { Product } from '../domain/model/product'
import { AxiosInstance } from 'axios'

interface CreateProductRepository {
    (product: Product): Promise<Product>
}

const createProductRepository = (axios: AxiosInstance): CreateProductRepository => async (product: Product) => {
    const response = await axios.post("/product", product)
    return new Product(response?.data)
}

export { createProductRepository, CreateProductRepository } 