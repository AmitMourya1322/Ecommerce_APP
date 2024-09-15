import { useSelector } from "react-redux";
import { CartItemsList,SectionTitle,CartTotals } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  //temp
  const user = useSelector((state)=>state.userState.user);
  const numItems = useSelector((state)=>state.cartState.numItemsInCart);

  if(numItems === 0){
    return <SectionTitle text=' Your Cart is Empty'/>;
  }
  return (
    <>
    <SectionTitle text='Shopping Cart'/>
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CartItemsList/>
      </div>
      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals/>
        {user ?
        ( <Link to='/checkout' className="btn btn-primary btn-clock mt-8">
        Proceed to Checkout
        </Link>):(
          <Link to='/login' className="btn btn-primary btn-clock mt-8">
          Please Login
          </Link>)

        }
      </div>
    </div>
    </>
  )
}

export default Cart