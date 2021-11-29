import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { getCategories } from "../../Redux/Actions/actions";

export default function Categorias() {

const dispatch = useDispatch();
const categories = useSelector((state) => state.categories);
const {nombre} = useParams();
let category = categories.filter(c=> c.name === nombre)
useEffect(() => {
dispatch(getCategories())
}, [dispatch])


function handelSubCat(){
}

  return (
   <div>
     <select className="w-40" onChange={handelSubCat}>
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
  );
}
