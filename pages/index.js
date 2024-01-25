import React from 'react';
import Style from '../css/index.module.css'
import Header from "../components/header";
function home(){
    return(
    <div className={Style.Container}>
      <Header/>
    </div>
    )
}
export default home;