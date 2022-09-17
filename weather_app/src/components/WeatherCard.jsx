import React from "react";
export default function WeatherCard(props) {
    // this.forceUpdate();
    console.log(props.text);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            {/* <div className="text-teal-700 font-bold text-xl mb-2">{props.city}</div> */}
            <div className="text-teal-700 font-bold text-xl mb-2">{props.city}</div>

            <div className="px-6 py-4">
                <div className="text-teal-500 font-bold text-xl mb-2">{props.text.main}</div>
                <p className="text-gray-400 text-base font-bold">
                    {props.text.description}
                </p>
                <p className="text-gray-400 text-base font-bold">
                    {props.text.temp}°C
                </p>
                <p className="text-gray-400 text-base font-bold">
                    {props.text.temp_min}°C min
                </p>
                <p className="text-gray-400 text-base font-bold">
                    {props.text.temp_max}°C max
                </p>

            </div>
        </div>
    );
}