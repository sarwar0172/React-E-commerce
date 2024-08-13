import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrderAsync, selectuserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../Auth/authSlice";

export default function UserOrders() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const orders = useSelector(selectuserOrders);
  useEffect(() => {
    dispatch(fetchLoggedInUserOrderAsync(user.id));
  }, []);
  return (
    <>
      {orders.map((orders, index) => (
        <div>
          {console.log(orders)}

          <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <h2 className="text-2xl font-bold">Order Number : {index + 1}</h2>
              <h3 className="font-bold text-red-700 mt-3">
                Order Status:{orders.status}
              </h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {orders.items.map((product) => (
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
                          <div className="text-gray-500">
                            Qty:{product.quantity}
                          </div>

                          <div className="flex"></div>
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
                <p>${Math.floor(orders.totalAmount)}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Totoal item in cart</p>
                <p>{orders.totalItems} items</p>
              </div>
            </div>
          </div>
          <hr />
          <p className="mt-0.5 text-sm text-gray-500">Shipping address</p>
          <li
            key={index}
            className="flex justify-between gap-x-6 py-5 border-solid border-gray-200 p-4 border-spacing-1"
          >
           
            <div className="flex min-w-0 gap-x-4 ">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {orders.selectedAddress.firstName}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {orders.selectedAddress.stree_address}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {orders.selectedAddress.pinCode}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                phone: {orders.selectedAddress.phone}
              </p>
              <p className="text-sm leading-6 text-gray-500">
                {orders.selectedAddress.city}
              </p>
              <p className="text-sm leading-6 text-gray-500">
                ZIP:{orders.selectedAddress.zip}
              </p>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}
