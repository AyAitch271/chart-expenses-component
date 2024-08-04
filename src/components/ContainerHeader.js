import React from "react";
import logo from '../assets/images/logo.svg'

const ContainerHeader = () => {
    return(
        <div className="container__header">
            <div className='container__header__info'>
                <span className="container__header__label --label">My balance</span>
                <span className="container__header__balance --bold">$921.48</span>
            </div>
            <img className="container__header__logo" src={logo} alt="logo"></img>
        </div>
    )
}

export default ContainerHeader