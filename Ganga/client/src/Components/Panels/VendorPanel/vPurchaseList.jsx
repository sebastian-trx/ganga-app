import React from 'react'
import { Review } from '../../Reviews/Review.jsx'


export default function PurchaseList({orders}) {

for (var i = 0; i < orders.length; i++) {
    for (var j = 0; j < orders[i].productInfo.length; j++) {
        orders[i].productInfo[j].date = orders[i].createdAt.slice(0,10)
        orders[i].productInfo[j].total = orders[i].productInfo[j].quantity * orders[i].productInfo[j].price
    }
}

let Products = orders.map(o => o.productInfo);
let products = Products.flat().reverse();

    return (
        <div>
        <div class="flex justify-center my-6">
            <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div class="flex-1">
                    {products?.length !== 0 ?
                    <table class="w-full text-sm lg:text-base" cellspacing="0">
                        <thead>
                            <tr class="h-12 uppercase">
                                <th class="hidden md:table-cell">
                                </th>
                                <th class="text-left">Producto</th>
                                <th class="hidden text-left md:table-cell">Fecha</th>
                                    <th class="lg:text-right text-left pl-5 lg:pl-0">
                                        <span class="lg:hidden" title="Quantity">Cant</span>
                                        <span class="hidden lg:inline">Cantidad</span>
                                    </th>
                                    <th
                                    class="text-right">Precio</th>

                                    <th class="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {products?.length !== 0
                ? products?.map((el) => (
                    <tr key={el.id}>
                      <td class="hidden pb-4 md:table-cell">
                          <img
                            src={el.image}
                            class="w-20 rounded"
                            alt="Thumbnail"
                          />
                      </td>
                      <td>
                        <p class="mb-2 md:ml-4">{el.name}</p>
                      </td>
                      <td class="hidden md:table-cell">
                      <p class="mb-2">{el.date}</p>
                      </td>
                      <td class="text-right">
                        <span class="text-sm lg:text-base font-medium">
                          {el.quantity}
                        </span>
                      </td>
                      <td class="text-right">
                        <span class="text-sm lg:text-base font-medium">
                          $ {el.price}
                          {console.log('soy el product mapeado: ', el)}
                        </span>
                      </td>
                      <td class="text-right">
                        <span class="text-sm lg:text-base font-medium">
                          $ {el.price * el.quantity}
                        </span>
                      </td>
                      <Review idUser={el.userId} idProduct={el.id} />
                    </tr>
                  ))
                : 
                <tr>
                      <td class="hidden pb-4 md:table-cell">
                      </td>
                      <td>
                          <p class="mb-2 md:ml-4">NO SE HAN REGISTRADO COMPRAS AUN...</p>
                      </td>
                      <td class="justify-center md:justify-end md:flex mt-6">
                        <div class="w-20 h-10">
                          <div class="relative flex flex-row w-full h-8">
                          </div>
                        </div>
                      </td>
                      <td class="hidden text-right md:table-cell">                        
                      </td>
                      <td class="text-right">
                      </td>
                    </tr>
                }
                        </tbody>
                </table>
                    :
                     <div>
                         NO SE HAN REGISTRADO COMPRAS AUN...
                     </div>                   
                }
                </div>
            </div>
        </div>
    </div>
    )
}
