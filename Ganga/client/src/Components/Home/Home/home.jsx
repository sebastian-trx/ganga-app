import React from "react";
import { /*useState,*/ useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../Redux/Actions/actions";
import Nav from "../../Nav/NavBar/nav";
// import headphones from "../../Resources/headphones.jpg";
// import f from "./home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allProduct = useSelector((state) => state.allProduct);
  const [nav, setNav] = useState(false)
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
    <div>
      <div className={nav? s.Nav: s.nav}>
        <Nav />
      </div>
    <div className={s.home}>
        <div className={f.imgsProducts}>
          <div>
            <img className={f.hp} src={headphones} alt="headphones" />
          </div>
        </div>
      </div>
    </div>
  );
}

