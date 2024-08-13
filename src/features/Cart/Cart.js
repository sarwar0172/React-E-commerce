import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteItemFromCartAsync, selectedItemsbyId, updateItemAsynce } from "./CartSlice";

import { Link, Navigate } from "react-router-dom";


export default function Cart() {
  const dispatch=useDispatch()
  const items = useSelector(selectedItemsbyId);
  console.log(items)
  const [open, setOpen] = useState(true);

  const totalAmount=items.reduce((amount,item)=>item[0].price*item.quantity+amount,0)
  const totalItems=items.reduce((total,item)=>item.quantity+total,0)


  const hanleQuantity=(e,item)=>{

    dispatch(updateItemAsynce({...item,quantity:+e.target.value}))
  }

  const handleRemove=(e,itemId)=>{
    dispatch(DeleteItemFromCartAsync(itemId))
  }

  return (
    <>
    {!items.length && <Navigate to='/' replace={true}></Navigate>}
    <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <h2 className="text-2xl">Cart</h2>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {items.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product[0].thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product[0].href}>{product[0].title}</a>
                      </h3>
                      <p className="ml-4">${product[0].price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product[0].brand}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm font-bold">
                    
                    <div className="text-gray-500">Qty 
                     <select name="" id="" className="ml-2" onChange={(e)=>hanleQuantity(e,product)} value={product.quantity}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                     </select>
                    </div>

                    <div className="flex">
                      <button
                       onClick={(e)=>handleRemove(e,product.id)}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${Math.floor(totalAmount)}</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Totoal item in cart</p>
          <p>{totalItems} items</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
        <Link to='/checkout'
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
         
            Checkout
         
          </Link>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or{" "}
            <Link to='/'>
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => setOpen(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
