import React from 'react'
import ConfirmedWistLists from '../components/ConfirmedWistLists/ConfirmedWistLists'

const ConfirmationPage = ({ approvedWishLists, discardedWishLists })  => {
    return (
        <section>
            <h2>Thank you for your confirmation.</h2>
            <h3>Approved Wish Lists</h3>
                <ConfirmedWistLists wishLists={approvedWishLists} />
            {
                discardedWishLists !== [] ? (
                    <div>
                        <h3>Discarded Wish Lists</h3>
                        <ConfirmedWistLists wishLists={discardedWishLists} />
                    </div>
                ) : (<div></div>)
            }
        </section>
    )
}

export default ConfirmationPage
