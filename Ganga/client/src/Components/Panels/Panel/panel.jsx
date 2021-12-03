import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserPanel from '../UserPanel/uPanel';
import VendorPanel from "../VendorPanel/vPanel";
import AdminPanel from "../AdminPanel/aPanel";
import { getAllUsers } from "../../Redux/Actions/actions";


export default function Panel() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
  
    useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);
    
    return (
        <div>
            
        </div>
    )
}
