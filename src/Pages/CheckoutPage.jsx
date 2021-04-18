import React from 'react'
import Checkout from '../components/Checkout/Checkout'

const CheckoutPage = ({ wishLists }) => {
    if(!wishLists) return 'Loading...'
    return (
        <section>
          <h1 className='brandName'>
                Droppee
          </h1>
          <h2>Checkout</h2>
          <Checkout wishLists={wishLists} />
        </section>
    )
}

export default CheckoutPage
