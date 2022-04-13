interface PaginationI {
    page: number
    itemsPerPage: number
    sort: string
    descending: string
    search: string
}

class Pagination {
    page: number
    itemsPerPage: number
    sort: string
    descending: string
    search: string

    constructor({ page, itemsPerPage, sort, descending, search }: PaginationI) {
        this.page = page
        this.itemsPerPage = itemsPerPage
        this.descending = descending
        this.search = search
        this.sort = sort
    }
}

export { Pagination } 