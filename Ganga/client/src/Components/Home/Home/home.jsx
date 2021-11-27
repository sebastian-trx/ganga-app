import React from "react";
import { /*useState,*/ useEffect } from "react";
import { useDispatch /*useSelector*/ } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import s from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const allProduct = useSelector((state) => state.allProduct);
  const [nav, setNav] = useState(false)
=======
  // const allProduct = useSelector((state) => state.allProduct)
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const navOpacity = () => {
    if(window.scrollY >= 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

window.addEventListener("scroll", navOpacity);

  return (
<<<<<<< HEAD
    <div>
      <div className={nav? s.Nav: s.nav}>
        <Nav />
      </div>
      <div className={s.home}>
       FOTO <br/> ACA
=======
    <div className={s.home}>
      <div>
>>>>>>> 3aae4c7f9f8046097882bddbb81cada63d6319f6
      </div>
    </div>
  );
}
