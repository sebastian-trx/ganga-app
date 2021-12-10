import React from 'react';
import { DataGrid } from "@mui/x-data-grid";

export default function VendorSalesList({user, orders, users}) {

    console.log("o", orders)

    // for (var i = 0; i < orders.length; i++) {
    //     for (var j = 0; j < orders[i].productInfo.length; j++) {
    //         orders[i].productInfo[j].date = orders[i].createdAt.slice(0,10)
    //         orders[i].productInfo[j].total = orders[i].productInfo[j].quantity * orders[i].productInfo[j].price
    //         orders[i].productInfo[j].user = users.filter(u => u.id === orders[i].userId);
    //     }
    // }
    
//let sales = orders.map(o => o.productInfo).flat();

    return (
        <div>
            
        </div>
    )
}
