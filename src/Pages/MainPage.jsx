import React from 'react'
import WishLists from '../components/WishLists/WishLists'

import { Link, useLocation } from 'react-router-dom'


const MainPage = ({ wishLists, handleUpdateProductQty, handleRemoveProduct, handleRemoveWishList, handleAddComment, handleDeleteComment }) =>  {

    return (
        <section>
            <h1 className='brandName'>
                Droppee
            </h1>
            <h2>Wish Lists</h2>
            <p className='subtitle'>* You will get a discount based on the number of identical products on your final bill (example: 20% for 2 identical products, 30% for 3 identical products - maximum 50%).</p>
            <WishLists 
                wishLists={wishLists} 
                handleUpdateProductQty={handleUpdateProductQty}
                handleRemoveProduct={handleRemoveProduct}
                onRemoveWishList={handleRemoveWishList}
                onAddComment={handleAddComment}
                onDeleteComment={handleDeleteComment}
            />
            {
                wishLists && (
                    <Link className='wl__processLink'  to='/checkout'><span style={{borderBottom: 'solid 1px black'}}>Process to Checkout Page</span><span className='arrow'> ➤</span></Link>
                )
            }
        </section>
    )
}

export default MainPage
