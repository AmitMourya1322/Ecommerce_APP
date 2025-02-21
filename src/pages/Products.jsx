import { PaginationContainer, ProductContainer } from "../components"
import { customFetch } from "../utils"
import Filters from "../components/Filters"
const url= '/products'

export const loader = async({request})=>{

  const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
  const response= await customFetch(url,{
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return {products,meta,params}
}

const Products = () => {
  return (
    <>
    <Filters/>
    <ProductContainer/>
    <PaginationContainer/>
    </>)
}

export default Products