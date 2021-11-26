import React from "react";
import Nav from '../../Nav/NavBar/NavBar'
import s from './home.module.css'



export default function Home(){
   
    

   

    return(
        <div className={s.home}>
        <div className={s.nav}>
            <Nav/>
        </div>
        </div>
    )
}