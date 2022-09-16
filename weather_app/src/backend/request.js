let APIKEY = '';
const URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='
var inf;
// funcion que hace un fetch y recogemos la informacon del json que nos daria
async function fetchJson(key) {
  let response = await fetch(`${URL}${key}`);
  console.log(response.status)
  if (response.status==200){
    let data = await response.json();
    inf = {
      "name": data["name"],
      "timezone": data["timezone"],
      "sunrise": data["sys"]["sunrise"],
      "sunset": data["sys"]["sunset"],
      "humidity": data["main"]["humidity"],
      "lat": data["coord"]["lat"],
      "lon": data["coord"]["lon"],
      "temp": data["main"]["temp"]
      
      
    }
    console.log(inf);
    return inf;
  }else{
    console.log("Data not save");
    return false;
  }
  
}

 
          
// variable que hace el fetch
const response = fetchJson(APIKEY)
// lista de consultas que almacena los datos que obtenemos de la funcion fetch
var response_list = []



// funcion que almacena en la lista de consultas, siempre y cuando exista
function saveRequest(res){
  if(res != false){
    response_list.push(res);
  }
  
}
// esta parte de codigo fue de prueba para verificar que funcione
saveRequest(response)  
console.log(response_list[0])