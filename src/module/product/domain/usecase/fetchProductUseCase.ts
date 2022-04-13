import { FetchProductsRepository } from "../../repository/fetchProductsRepository"
import { Pagination } from "@/module/pagination/domain/model/pagination"
import { ProductPagination } from "../model/product"
import { DataOptions } from "vuetify"

interface FetchProductsUseCase {
    (options: DataOptions, search: string): Promise<ProductPagination>
}

const fetchProductsUseCase = (repository: FetchProductsRepository): FetchProductsUseCase => async (options: DataOptions, search: string) => {
    const pagination = new Pagination({
        descending: options.sortDesc.join(","),
        sort: options.sortBy.join(","),
        page: options.page,
        itemsPerPage: options.itemsPerPage,
        search: search,
    })

    const productPagination = await repository(pagination)
    return productPagination
}

export { fetchProductsUseCase, FetchProductsUseCase } 