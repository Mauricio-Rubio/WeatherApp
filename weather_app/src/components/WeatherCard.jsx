import React from "react";
export default function WeatherCard(props) {
    // this.forceUpdate();
    console.log(props.text);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
            <div className="text-teal-700 font-bold text-xl mb-2">{props.city}</div>

            <div className="px-6 py-4">
                <div className="text-teal-500 font-bold text-xl mb-2">{props.text.main}</div>
                <p className="text-gray-400 text-base font-bold m-2">
                    {props.text.description}
                </p>
                <p className="text-gray-400 text-base font-bold m-2">
                    {props.text.temp} °C
                </p>
                <p className="text-gray-400 text-base font-bold m-2">
                    {props.text.feelsLike} °C (feels like)
                </p>
                <p className="text-gray-400 text-base font-bold m-2">
                    {props.text.presure} hpa
                </p>
                <p className="text-gray-400 text-base font-bold m-2">
                    {props.text.visibility} m (visibility)
                </p>

            </div>
        </div>
    );
}