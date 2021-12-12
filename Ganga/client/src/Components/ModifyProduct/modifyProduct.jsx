import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getDetailsProduct, getCategories, getSubcategory, updateProduct } from '../Redux/Actions/actions'
import s from './modifyProduct.module.css'
import Boton from '../Nav/boton'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export default function ModifyProduct() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");
    const info = useSelector((state) => state.detailProduct);
    const categories = useSelector((state) => state.categories)
    const getInfoGoogle = useSelector((state) => state.getInfoGoogle)
    const subcategories = useSelector((state) => state.subcategories)

    // function getInfo(){
    //     async
    //         if(info.length === 0) await dispatch(getDetailsProduct(id))
    //     }

    useEffect(() => {
        dispatch(getDetailsProduct(id));
        // window.location.reload();
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    const [input, setInput] = useState({
        name: info?.name,
        brand: info?.brand,
        description: info?.description,
        price: info?.price,
        status: info?.status,
        stock: info?.stock,
        image: info?.image,
        id: getInfoGoogle?.id,
        categoryId: info?.categoryId,
        subcategories: info?.subcategories,
    })
    console.log(input)

    function handleSelect1(e) {
        setInput({
            ...input,
            categoryId: e.target.value,
        })
        e.preventDefault();
        dispatch(getSubcategory(e.target.value))
    }

    function handleSelect2(e) {
        setInput({
            ...input,
            subcategories: [e.target.value]
        })
    }
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "htnah6yo");
        setLoading(true);

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/djrddcab5/image/upload",
            {
                method: "POST",
                body: data,
            }
        );

        const file = await res.json();
        setImage(file.secure_url);
    };

    const [errors, setErrors] = useState({});
    function validate(input) {
        let errors = {};
        if (!input.name) {
            errors.name = "Debe poner el nombre de su producto.";
        } else if (!input.price) {
            errors.price = "Debe poner el Precio de su Producto.";
        } else if (!input.description) {
            errors.description = "Debe tener una descripción";
        } else if (!input.stock) {
            errors.stock = "Debe igresar la cantidad de stock.";
        } else if (input.brand === "") {
            errors.brand = "Debe colocar la marca del producto";
        } else if (input.status === "") {
            errors.status = "Debe seleccionar la condicion del Producto";
        }
        return errors;
    }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function submit(e) {
        e.preventDefault();
        console.log(input, "SOY INPUT DEL SUBMIT")
        dispatch(updateProduct(input));
        navigate("/panel")
        window.location.reload();
    }
    return (
        <div >
            <div className={s.body}>
                <Boton
                    parametro={"/panel"}
                    icono={<BsFillArrowLeftSquareFill />}
                />
                <form onSubmit={submit} className={s.form} >
                    <div>
                        <h1 className="text-center bg-gray-700 text-white text-5xl" >Modifica tu Producto</h1>
                    </div>

                    <div className={s.grid1}>
                        <div className={s.derec}>
                            <div className={s.name}>
                                <label ><span >Nombre: </span ></label>
                                <div>
                                    <input
                                        value={input.name}
                                        className="text-center bg-gray-700 text-white"
                                        onChange={handleChange}
                                        type='text'
                                        name="name"
                                        placeholder="Nombre del Producto"
                                    />
                                    {errors.name ? <p>{errors.name}</p> : null}
                                </div>
                            </div>
                            <div className={s.price}>
                                <label><span >Precio: </span ></label>
                                <div>
                                    <input
                                        value={input.price}
                                        className="text-center bg-gray-700 text-white"
                                        onChange={handleChange}
                                        type='Number'
                                        name="price"
                                        autoComplete="off"
                                        required />
                                    {errors.price ? <p>{errors.price}</p> : null}
                                </div>
                            </div>

                            <div className={s.product}>
                                <label><span>Tu producto es: </span></label>
                                <select
                                    className="text-center bg-gray-700 text-white"
                                    name="status"
                                    onChange={handleChange} >
                                    <option value="" >Nuevo o Usado</option>
                                    <option value="true">Nuevo</option>
                                    <option value="false">Usado</option>
                                </select>
                                {errors.status ? <p>{errors.status}</p> : null}
                            </div>

                            {(input.status === "true") ?
                                (<div className={s.stock}>  <label> <span> Stock: </span></label>
                                    <input
                                        className="text-center bg-gray-700 text-white"
                                        type="number"
                                        name="stock"
                                        onChange={handleChange}
                                        autoComplete="off" />
                                </div>) : <p></p>
                            }
                            {errors.stock ? <p>{errors.stock}</p> : null}
                        </div>

                        <div className={s.izq}>
                            <div className={s.grid2}>
                                <div>
                                    <div className={s.marca}>
                                        <label><span >Marca: </span ></label>
                                        <div>
                                            <input
                                                className="text-center bg-gray-700 text-white"
                                                type='text'
                                                name="brand"
                                                onChange={handleChange}
                                                value={input.brand}
                                                autoComplete="off" />
                                            {errors.brand && (
                                                <p >{errors.brand}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className={s.descri}>
                                        <label><span >Descripción: </span ></label>
                                        <div >
                                            <input
                                                className="text-justify bg-gray-700 text-white w-full h-20"
                                                value={input.description}
                                                type='text'
                                                onChange={handleChange}
                                                name="description"
                                                autoComplete="off" />
                                            {errors.description && (
                                                <p >{errors.description}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>


                                <div className={s.cate}>
                                    <label > Categoria: </label>
                                    <select className="text-center bg-gray-700 text-white"
                                        name="idCategory"
                                        onChange={handleSelect1}  >
                                        {
                                            categories.map((p, i) => (
                                                <option key={i} value={p.id}>{p.name}</option>
                                            ))

                                        }
                                    </select >
                                </div>

                                <div>
                                    {
                                        (input.idCategory === " ") ?
                                            (<h1>Debes Seleccionar una Categoria</h1>) :
                                            (
                                                <div>
                                                    <label > SubCategoria: </label>
                                                    <select className="text-center bg-gray-700 text-white" name="subcategories" onChange={handleSelect2} >
                                                        {(
                                                            subcategories[0]?.subcategories.map((p, i) => (
                                                                <option key={i} value={p}>{p}</option>
                                                            ))
                                                        )}
                                                    </select >
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={s.grid5}>
                        <div className={s.grid3}>
                            <div>
                                <div className={s.uno}>
                                    <label className="text-center bg-gray-700 text-white">Cargar una Nueva Imagen</label>
                                </div>
                                <div className="text-center bg-gray-700 text-white">
                                    <input
                                        className={s.inputs}
                                        onChange={uploadImage}
                                        type="file"
                                        name="image"
                                        accept="image/png,image/jpeg"
                                    />
                                    {errors.image ? <p>{errors.image}</p> : null}
                                </div>
                                <div className={s.imgName}>{(input.image = image)}</div>
                                <label>
                                    {loading ? (
                                        <img className={s.imagenSubida} src={image} alt="No hay imagen" />
                                    ) : (
                                        <p>Aun no has subido una imagen</p>
                                    )}
                                </label>
                                <div className={s.btn}>
                                    <button className={s.crear} type='submit'>Modificar Producto</button>
                                </div>
                            </div>
                        </div>
                        <div className={s.grid6}>
                            <div className={s.nameProdc} >
                                <h1 className="text-center bg-gray-700 text-white">Imagen de tu producto</h1>
                            </div>
                            <div >
                                <img className={s.imgCargada} src={info.image} alt="imagen del producto" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


