import { getSingleProduct, getTrendingProducts } from "@/service/getSingleProduct";
import Container from "../components/Container";
import { Products } from "../../type";
import ProductsData from "../components/ProductsData";
import SingleProduct from "../components/SingleProduct";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({searchParams} : Props) {
   // console.log(searchParams);  
   const _idString = searchParams?._id;
   const _id = Number(_idString);
   const product = await getSingleProduct(_id); //하나의 포스트
   const data = await getTrendingProducts(); //모든 포스트
   //const {title} = product;
   //console.log(product);
    return (
        <div>   
            <Container>
                <div>
                   <SingleProduct product={product} />
                </div>
            <div>
                <p className="text-xl py-1 font-semibold">Tranding Products(인기상품)</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {data?.map((item:Products)=>(
                        <ProductsData key={item._id} item={item}/>
                    ))}
                </div>
            </div>
            </Container>
        </div>
    );
}

