import React from "react";
import './Wrapper.css'


function Wrapper ({ children }){
    return (
        <div className="wrapper">
            { children }
        </div>
    );
}
export default Wrapper;