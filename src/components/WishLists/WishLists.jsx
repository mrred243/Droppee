import React, { useState } from 'react'
import WishListItem from './WishListItem/WishListItem'

const WishLists = ({ wishLists, handleUpdateProductQty, handleRemoveProduct , onRemoveWishList, onAddComment, onDeleteComment }) => {

    const [commentInput, setCommentInput] = useState([])


    const handleInput = (e, i) => {
        let commentArr = [...commentInput];
        commentArr[i] = e.target.value
        console.log(i)
        setCommentInput(commentArr)
    }

    const submitComment = (i, commentArray) => {  
        onAddComment(i, commentArray)

        // reset commentArr
        let commentArr = [...commentInput];
        commentArr[i] = ''
        setCommentInput(commentArr);
    }

    if(!wishLists) return 'Loading...'
    return (
        <div className='wl wrapper'>
            {
                wishLists.map( (item,index) => (
                    <div className='wl container' key={index}>
                        <div className='wl header'>
                            <h3 className='wl title'>Name: {item.user.name.firstname[0].toUpperCase() + item.user.name.firstname.substring(1)} {item.user.name.lastname[0].toUpperCase() + item.user.name.lastname.substring(1)}</h3>
                            <button className='wl btn header close secondary' onClick={() => onRemoveWishList(index)}>X</button>
                        </div>
                        
                        {
                            item.comment && <p className='wl comment'><strong>Comment: </strong>{item.comment} <button className='wl btn close secondary' onClick={() => onDeleteComment(index)} >X</button></p>
                        }
                        <input className='input' type='text' placeholder='Write comment here...' value={commentInput[index]} onChange={(e) => handleInput(e, index)} />
                        <input className='btn secondary' type="button" value="Update Comment" onClick={() => submitComment(index, commentInput)} />
                        
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
