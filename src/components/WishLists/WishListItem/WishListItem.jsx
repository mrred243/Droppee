import React from 'react'

const WishListItem = ({ wishListItem, wishListId , onUpdateProductQty, onRemoveProduct }) => {
    
    if(!wishListItem) return 'Loading...'
    return (
        <div className='wl__products'>
            {
                wishListItem.map( (product,index) => (
                                <div className={index === 0 ? 'wl__item firstChild' : 'wl__item' }  key={index}>
                                    <p>
                                        Product: {product.productId}
                                    </p>
                                    <p>Price: ${product.productId * 10} / pc</p>
                                    
                                    <button className='btn primary' onClick={() => onRemoveProduct(wishListId, index)} >REMOVE</button>
                                    <p>
                                        <button className='btn secondary' onClick={() => onUpdateProductQty(wishListId, index, product.quantity - 1) } >-</button> 
                                         {product.quantity}  
                                        <button className='btn secondary' onClick={() => onUpdateProductQty(wishListId, index, product.quantity + 1) } >+</button>
                                    </p>
                                   
                                </div>
                ))
            }
        </div>
    )
}

export default WishListItem
