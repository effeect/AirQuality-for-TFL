//The following sketch was made possible by https://www.londonair.org.uk/LondonAir/Default.aspx

/*

http://api.erg.kcl.ac.uk/AirQuality/Information/AirPollutionGuide/Json

http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/Json

http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName={GroupName}/Json

*/

let groupsJSON;
let hourlyJSON;

//Using the group name "lewisham" for now
function preload(){
    let url = "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=lewisham/Json"
    
    hourlyJSON = loadJSON(url)
    
}

function setup(){
    createCanvas(500,500);
}

//This is a workaround property names beginning with @, spent 2 hours on this brickwall but storing it as a string works in JS
let theData= 'HourlyAirQualityIndex'
let groupName = '@GroupName'


function draw(){
    let varTest = hourlyJSON.HourlyAirQualityIndex[groupName]
    
    console.log(varTest)
}