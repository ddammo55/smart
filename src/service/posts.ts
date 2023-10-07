import { readFile } from "fs/promises";
import path from "path";

export interface Product {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
    item : Product[];
  }
  
  export interface ItemProps {
    item: Product;
  }

export async function getAllPosts() : Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    return readFile(filePath, 'utf-8')
    .then<Product[]>(JSON.parse)
}

export const calculatePercentage = (oldPrice:any, price:any)=>{
  return !!parseFloat(price) && !!parseFloat(oldPrice) ?(100-(oldPrice / price)*100).toFixed(0):0;
}