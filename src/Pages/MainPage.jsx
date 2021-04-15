import React from 'react'
import WishLists from '../components/WishLists/WishLists'

import { Link, useLocation } from 'react-router-dom'


const MainPage = ({ wishLists, handleUpdateProductQty, handleRemoveProduct, handleRemoveWishList }) =>  {

    return (
        <div>
            <h1>
                Droppeeeeee
            </h1>
            <p>* You will get a discount based on the number of identical products on your final bill (example: 20% for 2 identical products, 30% for 3 identical products)</p>
            <WishLists 
                wishLists={wishLists} 
                handleUpdateProductQty={handleUpdateProductQty}
                handleRemoveProduct={handleRemoveProduct}
                onRemoveWishList={handleRemoveWishList}
            />
            {
                wishLists && (
                    <Link  to='/checkout'>Process to Checkout Page</Link>
                )
            }
        </div>
    )
}

export default MainPage
