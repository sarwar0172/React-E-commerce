import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

  increment,
  incrementAsync,
} from './counterSlice';


export default function Order() {
  const count = useSelector(selectCount);

  return (
    <div>
  
    </div>
  );
}
