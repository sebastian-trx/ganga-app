import React from 'react';
import {  useSelector } from "react-redux";
import Card from '../../Card/card';
import Nav from '../NavBar/nav';
import User from '../User/user';

export default function SearchCatalog() {
    const user = useSelector((state) => state.getInfoGoogle);
    const allProducts = useSelector((state) => state.product);
    const products  = allProducts.filter(p=> p.approved === true);
    return (
        <div>
         {user && user.login ? (
        <div>
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div>
          <Nav />
        </div>
      ) : null}
      <div>
         {
          products.map((el, i) => {
              return (
                <div  className="inline-block" key={"card" + i}>
                  <Card
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el.id}
                  />
                </div>
              );
            })}
            </div>
        </div>
    )
}
