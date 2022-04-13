import { AxiosResponse } from "axios"

interface ProductI {
    id?: number
    name?: string
    description?: string
    price?: number
}

class Product {
    id: number
    name: string
    description: string
    price: number

    constructor({ id = 0, name = "", description = "", price = 0.00 }: ProductI) {
        this.id = id || 0
        this.name = name
        this.description = description
        this.price = price
    }
}

class ProductPagination {
    items: ProductI[]
    total: number

    constructor(response?: AxiosResponse) {
        this.items = response?.data?.items?.map((product: any) => new Product(product)) ?? []
        this.total = response?.data?.total ?? 0
    }
}

export { Product, ProductPagination }