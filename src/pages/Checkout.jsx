import React from 'react'
import { useSelector } from 'react-redux'
import { SectionTitle ,CartTotals ,CheckoutForm } from '../components';

export const loader=(store)=>()=>{
    const user = store.getState().userState.user
    if(!user)
    {
      toast.console.warn('You must logged in to checkout ');
      return redirect('/login')
    }
    return null;
}

const Checkout = () => {
    const cartTotal = useSelector((state)=>state.cartState.cartTotal);
    if(cartTotal ===0){
        return <SectionTitle text='Your cart is empty'/>
    }
  return (
   <>
   <SectionTitle text='Place your order'/>
   <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
    <CheckoutForm/>
    <CartTotals/>
   </div>
   </>
  )
}

export default Checkout