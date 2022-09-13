import React from "react";
import getKey from "../backend/key";
function Main(props) {
    console.log(getKey());
    return (
    <div className="text-3xl font-bold underline" > Your are allowed to be here
    <p></p>
    
    </div>
    );
}
export default Main;