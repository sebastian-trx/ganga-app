import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getProduct,
    orderByPrice,
    getUser,
} from "../../Redux/Actions/actions";
import Card from "../../Card/card";
import FilterPrice from "../Filter/filterPrice";
import Pagination from "../../Home/Pagination/pagination";
import download from "../../Resources/cargando.gif";
import Nav from "../NavBar/nav";
import User from "../User/user";
import "./searchCatalog.css";
import FooterCatalog from "../../Home/Footer/footerCatalog";

export default function SearchCatalog() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.getInfoGoogle);
    const allProducts = useSelector((state) => state.product);
    let products = allProducts.filter((p) => p.approved === true);
    products = products.filter((p) => p.stock > 0);

    const [, setOrden] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(18);
    const indexOfLastProducts = currentPage * elementsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - elementsPerPage;
    const currentProducts = products?.slice(
        indexOfFirstProducts,
        indexOfLastProducts
    );

    const Paginate = (pageNumbers) => {
        setCurrentPage(pageNumbers);
    };

    useEffect(() => {
        dispatch(getUser());
        // dispatch(getCategories());
    }, [dispatch]);

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

    return (
        <div className="containerSearchCa">
            <Nav className="flex justify-between items-center h-20 w-8 text-black" />
            <div className="bannerProdSearchCa"></div>
            {user && user.login ? (
                <div>
                    <div className="absolute top-5 right-20 z-50 mr-10 w-28">
                        <User />
                    </div>
                </div>
            ) : null}
            <div>
                <div className="infSearchCa">
                    <div className="filtrosSearchCa">
                        <div className="conNameFilSearchCa">
                            <h1 className="nameFilSearchCa">FILTROS:</h1>
                        </div>
                        <div className="inputContainerSearchCa">
                            <FilterPrice />
                        </div>
                        <div className="selectFilterSearchCa">
                            <select
                                className="selectSearchCa"
                                onChange={(e) => handleOrder(e)}
                            >
                                <option> ordena por precio: </option>
                                <option value="Menor-Mayor"> Mayor a Menor </option>
                                <option value="Mayor-Menor"> Menor a Mayor </option>
                            </select>
                        </div>
                        <div className="conBorSearchCa">
                            <button className="borSearchCa" onClick={handleClick}>
                                Borrar Filtros
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerCardsSearchCa">
                {currentProducts?.length === 0 ? (
                    <div className="downloadSearchCa">
                        <img src={download} alt="" />
                    </div>
                ) : (
                    currentProducts.map((el, i) => {
                        return (
                            <div className="cardProductsSearchCa" key={"card" + i}>
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
            <Pagination
                elementsPerPage={elementsPerPage}
                allProduct={products}
                paginate={Paginate}
            />
            <FooterCatalog />
        </div>
    );

}