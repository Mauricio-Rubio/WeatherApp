import React, { useState } from "react";
import getKey from "../backend/key";
import SearchComponent from "../components/SearchComponent";
import Papa from 'papaparse';
import getCities from '../backend/cities';
import Swal from 'sweetalert2';

function Main(props) {
    const [file, setFile] = useState(null);
    const [cities, setCities] = useState(null);
    const [IATA, setIATA] = useState(null);
    const [infoConsult, setInfoConsult] = useState(null);
    let lat;
    let lon;

    const uploadFile = e => {
        setFile(e)
    }
    const startReading = () => {
        let AUX = [];
        let ctAux = {};

        if (validateCSV(file[0].name)) {
            Papa.parse(file[0], {
                download: true,
                header: true,
                skipEmptyLines: true,
                complete: function (results) {
                    for (let i = 0; i < results.data.length; i++) {
                        if (!AUX.includes(results.data[i].origin && !AUX.includes(results.data[i].destination))) {
                            AUX.push(results.data[i].origin);
                            AUX.push(results.data[i].destination);
                            ctAux[results.data[i].origin] = {
                                lat: results.data[i].origin_latitude,
                                lon: results.data[i].origin_longitude
                            }
                            ctAux[results.data[i].destination] = {
                                lat: results.data[i].destination_latitude,
                                lon: results.data[i].destination_longitude
                            }
                        }
                    }
                    saveCities(ctAux);
                    AUX = quitRepited(AUX)
                    saveIATA(AUX);
                    makeRequest(results.datam, AUX, ctAux);
                }
            });
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Not a valid file',
                icon: 'error',
                confirmButtonText: 'Cool'
              }) 
        }
    }

    function makeRequest(data, iata, citiesAux) {
        const URL = 'https://api.openweathermap.org/data/2.5/weather?lat='
        let ctAux2 = getCities();
        console.log(iata.length);
        for (let i = 0; i < iata.length; i++) {
            if (citiesAux.hasOwnProperty(iata[i])) {
                if (!ctAux2.hasOwnProperty(iata[i]) && iata.length < 58) {
                    lat = citiesAux[iata[i]].lat;
                    lon = citiesAux[iata[i]].lon;
                    fetch(`${URL}${lat}&lon=${lon}&appid=${getKey()}&units=metric`)
                        .then(response => response.json())
                        .then(data => {
                            // console.log('NO existe');
                            ctAux2[iata[i]] = {
                                temp: data.main.temp,
                                feelsLike: data.main.feels_like,
                                main: data.weather[0].main,
                                description: data.weather[0].description,
                                presure: data.main.pressure,
                                visibility: data.visibility,
                            }
                            setInfoConsult(ctAux2);
                        })
                        .catch(err => console.log());
                }
            }
        }
        setCities(ctAux2);
        setInfoConsult(ctAux2);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'The Data Base has been updated',
            showConfirmButton: false,
            timer: 1200
        })
    }

    function validateCSV(strFile) {
        let fileName = strFile.split(".")
        if (fileName[1] === "csv") {
            return true;
        }
        return false;
    }


    function saveCities(params) {
        setCities(params);
    }

    function saveIATA(params) {
        setIATA(params);
    }

    function quitRepited(arr) {
        const dataArr = new Set(arr);
        return [...dataArr];
    }

    return (

        <div className="grid grid-cols-1 h-screen w-full">
            <div className="bg-gray-800 flex flex-col  pt-20">
                <h2 className="text-4xl text-white font-bold text-center">Weather App</h2>
                <div className="flex justify-center p-6">
                    <div className="mb-3 w-96">
                        <label htmlFor="formFileSm" className="form-label inline-block mb-2 text-gray-700">Enter a csv file</label>
                        <input accept=".csv" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" type="file" onChange={(e) => uploadFile(e.target.files)} />
                        <div className="flex space-x-2 justify-center">
                            <button onClick={() => { startReading() }} type="button" className="inline-block px-6 py-2.5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500/40 hover:shadow-lg focus:bg-teal-500/40 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500/40 active:shadow-lg transition duration-150 ease-in-out mt-4">Button</button>
                        </div>
                    </div>
                </div>

                <SearchComponent cities={cities} IATA={IATA} infoConsult={infoConsult} />
            </div>
        </div>
    );
}
export default Main;