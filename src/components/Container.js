import React from "react";
import ContainerHeader from "./ContainerHeader";
import ContainerMain from "./ContainerMain";

const Container = () => {
    return(
        <div className="container">
            <ContainerHeader />
            <ContainerMain />
        </div>
    )
}

export default Container