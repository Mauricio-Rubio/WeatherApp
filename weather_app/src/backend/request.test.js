let APIKEY = '';
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




