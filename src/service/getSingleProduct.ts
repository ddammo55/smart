import { getAllPosts } from "@/service/posts";


 //_id가 18인 매개변수가 들어오면 전체페이지에서 _id가 18인것만 가지고 오기

//  export async function getSingleProduct(_id: number) {
//      const productData = await getAllPosts();
//      const item = productData.find((product) => product._id === _id);
//     return item;
//   }
// export const getSingleProduct = async (_id:number) => {
//     try {
//       //const allPosts = await getAllPosts();
//       return getAllPosts()
//       .then((posts) => posts.filter((post) => post._id));
//     //   const item = allPosts.find((product) => product._id === _id);
//     //   return item;
//     } catch (error) {
//       console.error('Error fetching single product:', error);
//       throw error;
//     }
//   };
  
  export async function getSingleProduct(_id:number) {
    const posts = await getAllPosts();
    const post = posts.find((post) => post._id === _id);
    
    return post;
  }

  export async function getTrendingProducts() {
    const posts = await getAllPosts();
    return posts;
  }


  
