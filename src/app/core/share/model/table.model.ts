
export class Table {
    pagination: Pagination;
    total: number;
    data: any[];
    isLoading: boolean;
    isCheckedAll: boolean;
    filter: any;
    constructor(pagination: Pagination, total: number, data: any[], filter: any) {
        this.pagination = pagination;
        this.total = total;
        this.data = data;
        this.filter = filter;
        this.isLoading = true;
        this.isCheckedAll = false;
    }
    check(item): void {
        item.checked = !item.checked;
        this.isCheckedAll = this.data.filter(x => x.checked).length === this.data.length;
    }
    checkAll(): void {
        this.data = this.data.map(x => {
            x.checked = !this.isCheckedAll;
            return x;
        });
        this.isCheckedAll = !this.isCheckedAll;
    }
    pageIndexChange(value): void {
        this.isLoading = true;
        this.pagination.page = value - 1;
    }
    pageSizeChange(value): void {
        this.isLoading = true;
        this.pagination.perPage = value;
    }
}
export class Pagination {
    perPage: number;
    page: number;
    constructor(perPage: number, page: number) {
        this.perPage = perPage;
        this.page = page;
    }
}
