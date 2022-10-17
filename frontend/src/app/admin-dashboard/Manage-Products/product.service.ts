import { Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient} from '@angular/common/http';

import { ServerResponse } from "./models/ServerResponse";

import { Product } from "./models/product";

const domain = 'http://localhost:3000';
const viewProduct = domain+'';
const addProduct = domain+'';
const updateProduct=domain+'';
const deleteProduct=domain+'';

@Injectable({
  providedIn:'root'
})

export class ProductService {
  constructor(private http: HttpClient) { }


  viewProduct(id:string):Observable<ServerResponse<Product>>{
    return this.http.get<ServerResponse<Product>>(viewProduct+id)
  }

  addProduct(payload:Product):Observable<ServerResponse<Product>>{
    return this.http.post<ServerResponse<Product>>(addProduct, payload);
  }


  updateProduct(id:String, payload:Product):Observable<ServerResponse<Product>>{
    return this.http.put<ServerResponse<Product>>(updateProduct+id, payload);
  }

  deleteProduct(id:String):Observable<ServerResponse<Product>>{
    return this.http.delete<ServerResponse<Product>>(deleteProduct+id);
  }


}


