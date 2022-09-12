let APIKEY = '71f51a56b641078d5f48149a5e723dfa';
const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='

 export default function validarAPI(key) {
     fetch(`${URL}${key}`)
         .then(function (response) {
             if (response.status === 200) {
                 console.log('Api is working');
                 return true;
             } else {
                 console.log('Api is not working');
                 return false;
             }
         })
         .catch(err => console.log());
}
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

