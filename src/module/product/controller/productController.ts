import { CreateProductsUseCase } from "../domain/usecase/createProductUseCase";
import { FetchProductsUseCase } from "../domain/usecase/fetchProductUseCase";
import { Product, ProductPagination } from "../domain/model/product";
import { headers } from "../const/header";

class ProductController {
    options: any
    public product = new Product({})
    public productPagination = new ProductPagination()
    public headers = headers
    public formDialog = false

    constructor(
        private context: any,
        private fetchProductsUseCase: FetchProductsUseCase,
        private createProductUseCase: CreateProductsUseCase
    ) { }

    async paginate() {
        this.productPagination = await this.fetchProductsUseCase(this.options, "")
    }

    async save() {
        if (this.context.$refs.productForm.$refs.form.validate()) {
            await this.createProductUseCase(this.product)
            this.cancel()
            this.paginate()
        }
    }

    cancel() {
        this.product = new Product({})
        this.context.$refs.productForm.$refs.form.resetValidation()
        this.formDialog = false
    }
}

export { ProductController }