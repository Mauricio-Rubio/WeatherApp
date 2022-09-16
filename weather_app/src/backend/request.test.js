let APIKEY = 'b7ad871a196537d73c2524f49e3ae9f7';
const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
var inf;

async function fetchJson(key) {
  let response = await fetch(`${URL}${key}`);
  console.log(response.status)
  if (response.status==200){
    let data = await response.json();
    inf = {
      "name": data["name"],
      "timezone": data["timezone"],
      "sunrise": data["sys"],
      "sunset": data["sys"],
      "humidity": data["main"]["humidity"],
      "lat": data["coord"],
      "lon": data["coord"],
      "temp": data["main"]
      
      
    }
    console.log(inf);
    return data;
  }else{
    console.log("Data not save");
    return false;
  }
  
}
// function validarAPI(key) {
//       fetch(`${URL}${key}`)
//      .then(response => response.json())
//      .then(function(response){
//       return response.json()
//      })
//      .catch(err => console.log())
    


    
     
     
//           .then(function (response) {
//               if (response.status === 200) {
//                   console.log('Api is working');
//                   return true;
//               } else {
//                   console.log('Api is not working');
//                   return false;
//               }
//           })
//           .catch(err => console.log());
// }
 var dict = {
  "coord": {
    "lon": 10.99,
    "lat": 44.34
  },
  "weather": [
    {
      "id": 501,
      "main": "Rain",
      "description": "moderate rain",
      "icon": "10d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 298.48,
    "feels_like": 298.74,
    "temp_min": 297.56,
    "temp_max": 300.05,
    "pressure": 1015,
    "humidity": 64,
    "sea_level": 1015,
    "grnd_level": 933
  },
  "visibility": 10000,
  "wind": {
    "speed": 0.62,
    "deg": 349,
    "gust": 1.18
  },
  "rain": {
    "1h": 3.16
  },
  "clouds": {
    "all": 100
  },
  "dt": 1661870592,
  "sys": {
    "type": 2,
    "id": 2075663,
    "country": "IT",
    "sunrise": 1661834187,
    "sunset": 1661882248
  },
  "timezone": 7200,
  "id": 3163858,
  "name": "Zocca",
  "cod": 200
} 
          

const response = fetchJson(APIKEY)

var response_list = []


// console.log(response)

function saveRequest(res){
  
  console.log(inf);
  
  response_list.push(inf);
}
saveRequest(response)  
console.log(response_list[0])


// n=3
// lista_response = []
// for(i=0; i<n; i++){
//   let response = validarAPI(APIKEY)
//   let data = {
//     "lat": response["coord"]["lat"],
//     "temp": response["main"]["temp"],
//   }
//   lista_response.push(data)
// }


// export default function validarAPI(key) {
//     const request = new XMLHttpRequest();
//     // request.open("GET", `${URL && key}`);
//     request.open("GET", `${URL}${key}`);
//     request.send();
//     request.onload = () => {
//         if (request.status == 200) {
//             console.log(JSON.parse(request.response));
//             return true;
//         } else {
//             console.log(`Err --> ${request.status}`);
//             return false;
//         }
//     }
// }

