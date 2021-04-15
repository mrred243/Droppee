import './App.css';
import MainPage from './Pages/MainPage'
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Checkout from './Pages/CheckoutPage';


function App() {

  const [wishLists, setWishLists] = useState(null)

  const fetchWishLists = async () => {
      let wLists = []; 
      await fetch('https://fakestoreapi.com/carts?limit=5')
      .then(res=>res.json())
      .then(json=> wLists = json);

      for ( const item of wLists) {        
        item.user = await(fetchUser(item.userId))
      }
      setWishLists(wLists);      
  }

  const fetchUser = async userId => {
    let user = null;
    await fetch(`https://fakestoreapi.com/users/${userId}`)
    .then(res=>res.json())
    .then(json=> user = json)
    return user;
}


  const handleUpdateProductQty =  (wishListId, productId, quantity) => {
        const wList = [...wishLists];
        wList[wishListId].products[productId].quantity = quantity
        setWishLists(wList);
  }

  const handleRemoveProduct = (wishListId, productId ) => {
      const wList = [...wishLists]
      wList[wishListId].products.splice(productId, 1)
      setWishLists(wList);
  }

  const handleRemoveWishList = (wishListId) => {
    const wList = [...wishLists]
    wList.splice(wishListId, 1);
    setWishLists(wList);
}


  useEffect(() => {
    fetchWishLists()
  }, [])

  return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/'>
              <MainPage 
                handleUpdateProductQty={handleUpdateProductQty}
                wishLists={wishLists} 
                handleRemoveProduct={handleRemoveProduct}
                handleRemoveWishList={handleRemoveWishList}
              />
            </Route>
            <Route exact path='/checkout'>
              <Checkout 
                wishLists={wishLists}
              />
            </Route>
          </Switch>

        </div>
      </Router>

  );
}

export default App;
