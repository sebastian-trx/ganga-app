import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct, orderByPrice, getUser, getCategories, productsByName } from "../../Redux/Actions/actions";
import Card from "../../Card/card";
import s from "./catalog.module.css";
import Logo from "../Logo/logo";
import { VscDebugRestart } from "react-icons/vsc";
import FilterPrice from "../Filter/filterPrice";
import { ImSearch } from "react-icons/im";
import { IoIosCart } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import User from '../User/user'
import Pagination from '../../Home/Pagination/pagination';


export default function Catalogo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getInfoGoogle);
  const allProduct = useSelector((state) => state.product);
  const products  = allProduct.filter(p=> p.approved === true);

  const [, setOrden] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [name, setName] = useState(" ");

  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, /*setElementsPerPage*/] = useState(12)
  const indexOfLastProducts = currentPage * elementsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - elementsPerPage;
  const currentProducts =products?.slice(indexOfFirstProducts, indexOfLastProducts);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers)
  }


  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  function handleClick(e) {
    e.preventDefault();
    dispatch(getProduct());
    setCurrentPage(1);
  }


  function handleOrder(e) {

    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);

  }


  function handleInput(e) {
    e.preventDefault()
    setName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(productsByName(name))
    setName(" ")
  }
  return (
    <div>
      <nav className="flex justify-between items-center h-20  text-black">
        <Link to="/" className="pl-10">
          <div className=" w-30">
            <Logo />
          </div>
        </Link>

 

        <div className=" w-30">
          <button onClick={handleClick}>
            <VscDebugRestart />
          </button>
        </div>



        <div className="px-6">
          <FilterPrice />
        </div>



        <div className="pr-10">
          <select className="w-38" onChange={(e) => handleOrder(e)}>
            <option value="All"> Orden por Precio: </option>
            <option value="Menor-Mayor"> Mayor a Menor </option>
            <option value="Mayor-Menor"> Menor a Mayor </option>
          </select>
        </div>
        
        <input
          // className="px-4"
          type="text"
          placeholder="Busca tu producto"
          name="busca"
          onChange={handleInput}
          className="bg-gray-100 pt-3 pb-1 ml-10 h-7 border-gray-500"
        // border-l-2 border-t-2 border-b-2"
        />
        <button
          type="submit"
          onClick={handleSubmit}
        // className=" px-1  h-7 bg-gray-100 mr-4 mb-2 border-gray-500 border-r-2 border-t-2 border-b-2"
        >
          <ImSearch />
        </button>

        {/* <input
          type="text"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div>
          {filteredData.length === 0 ? (<ImSearch onClick={handleSumit} />) :
            <div><ImSearch onClick={handleSumit} /> <GrClose onClick={clearInput} /></div>}
        </div>
        {filteredData.length !== 0 && (
          <div>
            {
              filteredData.map((el, key) => {
                return <option onClick={handleInput} value={el.name} key={key}>{el.name}</option>
              })
            }

          </div>
        )} */}
        <Link to="/shopCart" className="pl-6 pr-10">
          <button>
            <IoIosCart />
          </button>
        </Link>
        {
          user && user.login ?
          <div className="absolute top-5 right-20 z-50 mr-10 w-28">
            <User />
          </div> :
            <>
              <Link to="/registrarme" className="pl-4">
                <span>Crear cuenta</span>
              </Link>

              <Link to="/ingresar" className="pl-4">
                <span>Iniciar Sesión</span>
              </Link>
            </>
        }
      </nav>

      <div className={s.nav}>

        <div className={s.cards}>
          {currentProducts?.length === 0 ? (
            <div className={s.Cargando}>
              <h1>Cargando</h1>
            </div>
          ) : (
            currentProducts.map((el, i) => {
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
        </div>
      </div>
      <div>
        <Pagination
          elementsPerPage={elementsPerPage}
          allProduct={products}
          paginate={paginate} />
      </div>
    </div>
  );
}