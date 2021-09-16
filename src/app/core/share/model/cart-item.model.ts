import { IProduct } from './product.model';

export class CartItem {
    product: IProduct;
    quantity: number;
    constructor(product: IProduct,  quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
    get mathPrice(): number {
        const sumPrice = this.product.price * this.quantity;
        return sumPrice;
    }

}

