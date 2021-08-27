export class CartItem {
    product: string;
    price: number;
    img: string;
    quantity: number;
    constructor(product: string, price: number, img: string, quantity: number) {
        this.product = product;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
    }
    get mathPrice(): number {
        const sumPrice = this.price + this.quantity;
        return sumPrice;
    }
    mathFullPrice(sumPrice: number[]) {
        let sumFullPrice: number;
        sumPrice.forEach(element => {
            sumFullPrice = sumFullPrice + element;
        });
    }
}

