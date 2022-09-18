import { info } from "autoprefixer";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import WeatherCard from "./WeatherCard";
import Swal from 'sweetalert2'

let counter = 0;

export default function SearchComponent(props) {
    // const cities = props.cities;
    const IATA = props.IATA;
    const infoConsult = props.infoConsult;
    console.log(infoConsult);
    const [consult, setConsult] = useState("");
    const [infoProps, setinfoProps] = useState("");
    let inputRef = useRef(null);
    
    function handleSearch() {
        console.log(inputRef.current.value);
        setConsult(inputRef.current.value.toUpperCase());
    };
    useEffect(() => {
        console.log("---->"+consult);
        if(consult !== "" && validIATA(consult.toUpperCase())){
            console.log("Validate IATA "+validIATA(consult));
            setinfoProps(infoConsult[consult.toUpperCase()]);
            console.log('sended data -> '+infoProps[consult]);
        }else{
            setConsult("");
        }
    }, [consult]);



    function saveConsult(params) {
        setConsult(params);
    }

    function validIATA(params) {
        if(IATA === null || infoConsult === null){
            Swal.fire({
                title: 'Error!',
                text: 'The data base is not ready',
                icon: 'error',
                confirmButtonText: 'Cool'
              }) 
            return false;
        }
        if (IATA.includes(params)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="flex-col items-center justify-center pt-12">
            <div className="flex space-x-1 mx-12" >
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    ref={inputRef}
                />
                <button className="px-4 text-white bg-teal-500 shadow-lg rounded-full shadow-teal-500/50 hover:shadow-teal-500/40" onClick={handleSearch}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <div className="flex space-x-1 justify-center mt-16 p-2	 flex-wrap -m-3">
                {consult !== "" ? <WeatherCard text={infoProps} city={consult}/> : null}
            </div>
        </div>
    );
}