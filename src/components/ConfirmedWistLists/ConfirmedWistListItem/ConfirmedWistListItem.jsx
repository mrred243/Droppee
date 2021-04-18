import React from 'react'

const ConfirmedWistListItem = ({wishListItem})=> {
    console.log(wishListItem)
    return (
        <div>
            {
                wishListItem.map((item, index) => (
                    <div key={index}>
                        <hr />
                        <p><strong>Product: </strong>{item.productId}</p>
                        <p><strong>Quantity: </strong>{item.quantity}</p>
                    </div>   
            )       
            )
            }
        </div>
    )
}

export default ConfirmedWistListItem
