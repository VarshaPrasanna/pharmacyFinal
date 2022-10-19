export class Order{
    userId: string = '';
    products: {productId: string, qty: number}[] = [];
    amount: number = 0;
    address: any;
    status: string = '';

    constructor() {}
}