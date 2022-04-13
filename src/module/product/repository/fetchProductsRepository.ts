import { Pagination } from '@/module/pagination/domain/model/pagination'
import { ProductPagination } from '../domain/model/product'
import { AxiosInstance } from 'axios'

interface FetchProductsRepository {
    (pagination: Pagination): Promise<ProductPagination>
}

const fetchProductsRepository = (axios: AxiosInstance): FetchProductsRepository => async (pagination: Pagination) => {
    const response = await axios.get("/product", {
        params: pagination
    })

    const productPagination = new ProductPagination(response)
    return productPagination
}

export { fetchProductsRepository, FetchProductsRepository } 