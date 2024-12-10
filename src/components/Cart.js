import React from 'react'
import { useSelector } from 'react-redux'
import Restaurant from './Restaurant'
import EnhancedRestaurantcard from './EnhancedRestaurantHoc';

const EnhancedRestaurant = EnhancedRestaurantcard(Restaurant);

function Cart() {

  const data = useSelector((state) => state.restaurant.items);
  console.log(data);
  return (
    <div className='cart_container'>
        {data.length > 0 ? (
        data.map((item,index) => (
            (item?.info?.parentId > 1000) ? 
            <EnhancedRestaurant key={item?.info?.id || index} data={item}/> : 
            <Restaurant key={item?.info?.id || index} data={item} />
        ))): (
            <div>Please add item to cart</div>
        )}
    </div>
  )
}

export default Cart