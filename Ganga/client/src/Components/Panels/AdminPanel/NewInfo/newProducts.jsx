import React from 'react';
import NewProductsCard from './newProductsCard';


export default function NewProducts({ products }) {

    let newProducts = products.filter(p => p.approved === false);




    return (
        <div>
            <h1> Productos a revisar:</h1>
            {
                newProducts.map(p => {
                    return (
                        <div className='inline-block'>
                            <NewProductsCard products={newProducts}
                                name={p.name} image={p.image} id={p.id} price={p.price}
                                descripcion={p.description}
                            />
                        </div>

                    )
                })
            }
        </div>
    )
}