import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../Card/card";
import { getCategories, getProduct } from "../../Redux/Actions/actions";

export default function Categorias() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories);
  const {nombre} = useParams();
  const allProduct = useSelector((state) => state.product);
  let category = categories.filter(c=> c.name === nombre)
useEffect(() => {
dispatch(getCategories())
}, [dispatch])

useEffect(() => {
  dispatch(getProduct());
}, [dispatch]);


let products = allProduct.filter(p => p.categories === nombre);
console.log("products", products)

function handleSubCat(e){
 let sub = products.filter(p => p.subcategories === e.target.value )
 navigate("/categorias/" + nombre);
}

  return (
   <div>
     <div>
     <select className="w-40" onChange={handleSubCat}>
       <option> SubCategorias </option>
          {
              category[0].subcategories?.map((el, i) => 
                   (
                  <option  key={i} value={el}>
                  {el}
                  </option>
                  )
              )
          }
      </select>
      </div>
      <div1>
        {products?.length === 0 ? (
          <div>
            <h1>Cargando</h1>
          </div>
        ) : (
          products.map((el, i) => {
            return (
                <div key={"card" + i}>
                  <Card
                    name={el.name}
                    image={el.image}
                    price={el.price}
                    id={el.id}
                  />
                </div>
            );
          })
        )}
      </div1>
</div>
  );
}
