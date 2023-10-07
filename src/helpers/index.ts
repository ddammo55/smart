export const getProducts = async()=>{
    const res = await fetch("http://localhost:3000/api/products");
    if(!res.ok){
       throw new Error("데이터를 가져오지 못했습니다.") 
    } 
    return res.json();
}