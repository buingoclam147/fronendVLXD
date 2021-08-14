
export interface IProduct {
    name: string;
    categoryId: string;
    supplierId: string;
    photos: [string];
    checked: boolean;
    note: string;
    price: number;
    quantity: number;
    unit: string;
    _id: string;
}
