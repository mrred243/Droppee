import React from 'react'
import WishListItem from './WishListItem/WishListItem'

const WishLists = ({ wishLists, handleUpdateProductQty, handleRemoveProduct , onRemoveWishList}) => {

    if(!wishLists) return 'Loading...'
    return (
        <div>
            {
                wishLists.map( (item,index) => (
                    <div key={index}>
                        <h3>Name: {item.user.name.firstname[0].toUpperCase() + item.user.name.firstname.substring(1)} {item.user.name.lastname[0].toUpperCase() + item.user.name.lastname.substring(1)}</h3>
                        <button onClick={() => onRemoveWishList(index)}>X</button>
                        <WishListItem 
                            wishListItem={item.products} 
                            wishListId={index} 
                            onUpdateProductQty={handleUpdateProductQty}
                            onRemoveProduct={handleRemoveProduct}
                        />
                    </div>
                )
                )
            }
        </div>
    )
}

export default WishLists
