import React from "react";
import { useRef } from "react";
export default function SearchComponent() {
    let inputRef = useRef(null);
    function handleSearch(){
        console.log(inputRef.current.value);
    };

    return (
        <div className="flex items-center justify-center pt-12">
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-full focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    ref={inputRef}
                />
                <button className="px-4 text-white bg-teal-500 rounded-full shadow-teal-500/50 hover:shadow-teal-500/40" onClick={handleSearch}>
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
        </div>
    );}