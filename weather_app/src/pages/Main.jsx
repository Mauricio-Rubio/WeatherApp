import React, { useState } from "react";
import getKey from "../backend/key";
import SearchComponent from "../components/SearchComponent";

function Main(props) {
    console.log(getKey());
    function handleSearch(){
        alert(``);
    };
    return (
        
        <div className="grid grid-cols-1 h-screen w-full">
            <div className="bg-gray-800 flex flex-col  pt-20">
            <h2 className="text-4xl text-gray-400 font-bold text-center">Weather App</h2>
            <SearchComponent/>
            </div>
        </div>
    );
}
export default Main;