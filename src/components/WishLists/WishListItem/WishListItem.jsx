import React from 'react'

const WishListItem = ({ wishListItem, wishListId , onUpdateProductQty, onRemoveProduct }) => {
    
    if(!wishListItem) return 'Loading...'
    return (
        <div>
            {
                wishListItem.map( (product,index) => (
                                <div key={index}>
                                    <p>
                                        Product: {product.productId}
                                    </p>
                                    <p>Price: ${product.productId * 10} / pc</p>
                                    
                                    <button onClick={() => onRemoveProduct(wishListId, index)} >Remove</button>
                                    <p>
                                        <button onClick={() => onUpdateProductQty(wishListId, index, product.quantity - 1) } >-</button> 
                                         {product.quantity}  
                                        <button onClick={() => onUpdateProductQty(wishListId, index, product.quantity + 1) } >+</button>
                                    </p>
                                   
                                </div>
                ))
            }
        </div>
    )
}

export default WishListItem
