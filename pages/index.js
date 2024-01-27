import React from 'react';
import Header from "../components/header";
import Submenu from '../components/submenu';
function home(){
    return(
    <>
      <Header logoSrc="/images/logo.jpg" />
      <Submenu/>
    </>
    )
}
export default home;