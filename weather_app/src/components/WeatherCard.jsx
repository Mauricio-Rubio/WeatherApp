import React from "react";
export default function WeatherCard(props) {
    // this.forceUpdate();
    // console.log(props);
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            <div className="text-teal-700 font-bold text-xl mb-2">{props.text.country}</div>
            <div className="px-6 py-4">
                <div className="text-teal-500 font-bold text-xl mb-2">{props.text.name}</div>
                <p className="text-gray-400 text-base font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    );
}