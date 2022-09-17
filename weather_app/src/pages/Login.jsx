import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2'
import validarAPI from "../backend/request.test"
import { setKey } from "../backend/key";
import Papa from 'papaparse/papaparse.min';

// import withReactContent from 'sweetalert2-react-content'
function Login() {
    readDB();
    const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
    const [api, setApi] = useState(false);
    let history = useNavigate();
    let inputRef = useRef(null);
    const handleSubmit = (event) => {
        //alert(inputRef.current.value)
        event.preventDefault();
        console.log("--->"+validarAPI(inputRef.current.value));
        
        fetch(`${URL}${inputRef.current.value}`)
        .then(function (response) {
            if (response.status === 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                 
                  Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                  })
                  setKey(inputRef.current.value);
                  history("/Main")
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'The api key is not valid',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  }) 
            }
        })
        .catch(err => console.log());

    }
    return (
        <div className="grid grid-cols-1 h-screen w-full">
            <div className="bg-gray-800 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg" onSubmit={handleSubmit}>
                    <h2 className="text-4xl text-white font-bold text-center">Start</h2>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label>API KEY</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500  focus:bg-gray-800 focus:outline-none" ref={inputRef} type="password" />
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded">Sign In</button>
                </form>
            </div>
        </div>
    );
}
export default Login;

function readDB() {
    // const csv = "../data/dataset1.csv";
    // console.log(Papa.parse(csv));
    function readFile (evt) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            console.log(text);
        }
     }
}