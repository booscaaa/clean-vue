import { CreateProductRepository } from "../../repository/createProductRepository"
import { Product } from "../model/product"

interface CreateProductsUseCase {
    (product: Product): Promise<Product>
}

const createProductUseCase = (repository: CreateProductRepository): CreateProductsUseCase => async (product: Product) => {
    const productCreated = await repository(product)
    return productCreated
}

export { createProductUseCase, CreateProductsUseCase } 