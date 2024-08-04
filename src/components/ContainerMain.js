import React from "react";
import BarChart from "./BarChart";

const ContainerMain =  () => {
    return(
        <div className="container__main">
            <span className="container__main__spendings --bold">Spendings - Last 7 days</span>
            <div className="container__main__forChart"><BarChart/></div>
            <hr></hr>
            <div className="container__main__summary">
                <div className="container__main__summary--left">
                    <span className="--label">this month</span>
                    <span className="total --bold">$478.33</span>
                </div>
                <div className="container__main__summary--right">
                    <span className="percentage --bold">2.4%</span>
                    <span className="--label">from last month</span>
                </div>
            </div>
        </div>
    )
}

export default ContainerMain