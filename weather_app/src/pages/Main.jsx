import React, { useState } from "react";
import getKey from "../backend/key";
import SearchComponent from "../components/SearchComponent";
import Papa from 'papaparse';


function Main(props) {
    const [file, setFile] = useState(null);

    const uploadFile = e => {
        setFile(e)
        // console.log("-->" + file[0].name);
        //console.log("--->"+Papa.parse(e[0]));
    }
    const startReading = () => {
        Papa.parse(file[0], {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results.data);
                // let arr = results.data.map(o => {Object.values(o)})
                // console.log(arr);
            }
        });
        // let reader = new FileReader();
        // let fileToRead = file;
        // reader.addEventListener("loadend", function() {
        //     // reader.result contains the contents of blob as a typed array
        //     // we insert content of file in DOM here
        //     // document.getElementById('file').innerText = reader.result;
        //     console.log(reader.result);
        //  });
        //  reader.readAsText(fileToRead);


        // console.log("file -->" + file[0].name);
        // console.log("file -->" + file[0].type);
        // // Papa.parse(file, {
        //     header: true,
        //     download: true,
        //     skipEmptyLines: true,
        // });
    }
    console.log(getKey());
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

                <SearchComponent />
            </div>
        </div>
    );
}
export default Main;