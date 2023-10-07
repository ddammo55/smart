export const calculatePercentage = (oldPrice:any, price:any)=>{
    return !!parseFloat(price) && !!parseFloat(oldPrice) ?(100-(oldPrice / price)*100).toFixed(0):0;
  }