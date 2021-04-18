import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Checkout = ({ wishLists }) => {
    const [productList, setProductList] = useState([])
    const [finalPrice, setFinalPrice] = useState(null)
    const orgPrice = 10;
    

    const productCounter = async () => {
        let productLi = [];
        for(const item of wishLists){
            productLi = productLi.concat(item.products)
        }
        productLi = await productLi.reduce((newArr, item) => {
            let cc = newArr.findIndex((e)  => e.productId === item.productId);
            if(cc === -1) newArr.push({productId: item.productId, quantity: parseFloat(item.quantity)});
            else newArr[cc].quantity += parseFloat(item.quantity)
            return newArr
        }, []);

        await productLi.map(item => item.price = priceCal(item.productId, item.quantity))
        console.log(productLi)
        setProductList(productLi)
        
        finalPriceCal(productLi)

    }

    const finalPriceCal = priceArr => {
        let fPrice = 0;
        for( const item of priceArr) {
            fPrice += item.price.afterPrice
        }
        setFinalPrice(fPrice);
    }

    const priceCal = (productId, quantity) => {
        const beforePrice = productId * orgPrice * quantity;
        if ( quantity === 1 ) {
            return { beforePrice: beforePrice, afterPrice: beforePrice }
        }
        else if( quantity < 5 && quantity > 1  ) {
            return  { beforePrice: beforePrice, afterPrice: beforePrice - (beforePrice * (quantity * 0.1)) }
        } else {
            return { beforePrice: beforePrice, afterPrice: beforePrice - (beforePrice * (5 * 0.1)) }
        }       
    }

    useEffect(() => {
        if(wishLists){
            productCounter()
            }
        }, [wishLists]
    )

    if(!productList) return 'Loading...' ;
    return (
        <div className='checkout__container'>
            <div className='mainSection'>
            {
                productList.map( (item, index) => (
                    <div className='checkout item' key={index}>
                        <h3>Product: {item.productId}</h3>
                        <p className='subtitle'><strong>Ship from: </strong> Finland</p>
                        <p><strong>Quantity: </strong> {item.quantity} pc(s)</p>
                        {
                            item.price.beforePrice === item.price.afterPrice ? 
                                    <p><strong>Price: </strong>{item.price.beforePrice}</p>
                            :       <p><strong>Price: </strong><span style={{textDecoration: 'line-through'}}>${item.price.beforePrice}</span> <span>${item.price.afterPrice}</span></p>
                        }
                    </div>
                ))              
            }
            </div>
            <div className='sideSection'>
                <p className='totalPrice'><strong>Total: </strong>${finalPrice}</p>
                <Link  to='/confirmation'>
                    <button className='btn primary buy'>
                        CONFIRM
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Checkout
