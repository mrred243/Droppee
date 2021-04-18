import React from 'react'
import ConfirmedWishListItem from './ConfirmedWistListItem/ConfirmedWistListItem'

const ConfirmedWistLists = ({ wishLists }) => {
    if(!wishLists) return 'Loading ...';
    return (
        <div className='confirmedWishlists wrapper'>
            {
                wishLists.map((item, index) => (
                    <div className='confirmedWishlists container' key={index}>
                         <p className='title'><strong>Name: </strong>{item.user.name.firstname[0].toUpperCase() + item.user.name.firstname.substring(1)} {item.user.name.lastname[0].toUpperCase() + item.user.name.lastname.substring(1)}</p>
                        <ConfirmedWishListItem wishListItem={item.products} />
                    </div>    
                ))
            }
        </div>
    )
}

export default ConfirmedWistLists
