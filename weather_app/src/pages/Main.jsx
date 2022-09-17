import React, { useState } from "react";
import getKey from "../backend/key";
import SearchComponent from "../components/SearchComponent";
import Papa from 'papaparse';
// import { data } from "autoprefixer";
// import validarAPI from "../backend/request.test";


// const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API}`

function Main(props) {
    // console.log('API KEY -> ' + getKey());
    const [file, setFile] = useState(null);
    const [cities, setCities] = useState(null);
    const [IATA, setIATA] = useState(null);
    // const [infoConsult, setInfoConsult] = useState(null);
    let lat;
    let lon;
    let counter = 0;

    const uploadFile = e => {
        setFile(e)
    }
    const startReading = () => {
        const AUX = [];
        let ctAux = {};
        let ctAux2 = {};
        Papa.parse(file[0], {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                // const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=19.3371&lon=-99.566&appid='
                const URL = 'https://api.openweathermap.org/data/2.5/weather?lat='
                // https://api.openweathermap.org/data/2.5/weather?lat=19.3371&lon=-99.566&appid71f51a56b641078d5f48149a5e723dfa&units=metric
                for (let i = 0; i < 5; i++) {
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

                        if (!(ctAux2.hasOwnProperty(results.data[i].origin))) {
                            counter++;
                            lat = results.data[i].origin_latitude;
                            lon = results.data[i].origin_longitude;
                            fetch(`${URL}${lat}&lon=${lon}&appid=${getKey()}&units=metric`)
                                .then(response => response.json())
                                .then(data => {
                                    ctAux2[results.data[i].origin] = {
                                        temp: data.main.temp,
                                        temp_min: data.main.temp_min,
                                        temp_max: data.main.temp_max,
                                    }
                                })
                                .catch(err => console.log());
                        }
                        if (!ctAux2.hasOwnProperty(results.data[i].destination)) {
                            counter++;
                            lat = results.data[i].destination_latitude;
                            lon = results.data[i].destination_latitude;
                            fetch(`${URL}${lat}&lon=${lon}&appid=${getKey()}&units=metric`)
                                .then(response => response.json())
                                .then(data => {
                                    ctAux2[results.data[i].destination] = {
                                        temp: data.main.temp,
                                        temp_min: data.main.temp_min,
                                        temp_max: data.main.temp_max,
                                    }
                                })
                                .catch(err => console.log());
                        }
                    }
                    
                }
                console.log(ctAux2);
                console.log('Times---> ' + counter);
                saveCities(ctAux);
                saveIATA(quitRepited(AUX));
            }
        });
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

    // console.log(getKey());
    return (

        <div className="grid grid-cols-1 h-screen w-full">
            <div className="bg-gray-800 flex flex-col  pt-20">
                <h2 className="text-4xl text-white font-bold text-center">Weather App</h2>
                <div className="flex justify-center p-6">
                    <div className="mb-3 w-96">
                        <label htmlFor="formFileSm" className="form-label inline-block mb-2 text-gray-700">Enter a csv file</label>
                        <input accept=".csv" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileSm" type="file" onChange={(e) => uploadFile(e.target.files)} />
                        <div className="flex space-x-2 justify-center">
                            <button onClick={() => { startReading() }} type="button" className="inline-block px-6 py-2.5 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-500/40 hover:shadow-lg focus:bg-teal-500/40 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-500/40 active:shadow-lg transition duration-150 ease-in-out">Button</button>
                        </div>
                    </div>
                </div>

                <SearchComponent cities={cities} IATA={IATA} />
            </div>
        </div>
    );
}
export default Main;