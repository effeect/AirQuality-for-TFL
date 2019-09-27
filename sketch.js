//The following sketch was made possible by https://www.londonair.org.uk/LondonAir/Default.aspx

let groupsJSON;
let hourlyJSON;

/*

http://api.erg.kcl.ac.uk/AirQuality/Information/AirPollutionGuide/Json

http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/Json

http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName={GroupName}/Json

*/

//Using the group name "lewisham" for now
function preload(){
    let url = "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=lewisham/Json"
    
    hourlyJSON = loadJSON(url)
    
}

function setup(){
    createCanvas(500,500);
}

let test= "HourlyAirQualityIndex.LocalAuthority.Site[0].Species[0].@AirQualityIndex"


function draw(){
    let varTest = hourlyJSON
    
    console.log(varTest)
}