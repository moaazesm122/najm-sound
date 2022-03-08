import { Category } from "./category";



export interface Product{
    id:number;
    name:string;
    description:string;
    categoryId:number;
    price:number;
    category: Category
}
