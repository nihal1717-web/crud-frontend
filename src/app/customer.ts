import { Product } from "./product";

export class Customer {

    id: number =0;
    firstName: string | undefined; 
    lastName: string | undefined;
    address: string | undefined; 
    email: string | undefined;
    mobile: string | undefined;
    products: Product | undefined;

}
