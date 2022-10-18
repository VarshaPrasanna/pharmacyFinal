export class Product {
  _id!: string;
  title!: string
  description!: string
  img!: string
  categories!: string
  price!: number

  constructor() {
    this._id = '';
    this.title = '';
    this.description = '';
    this.img = '';
    this.categories = '';
    this.price = 0;


  }
}