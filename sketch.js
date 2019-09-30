//The following sketch was made possible by https://www.londonair.org.uk/LondonAir/Default.aspx

/* List of potenial websites API links

http://api.erg.kcl.ac.uk/AirQuality/Information/AirPollutionGuide/Json

http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/Json

http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName={GroupName}/Json

*/

//Groups List
let groupsJSON;

//Arrays for storing the objects from JSON so we can modify and utlise the data if need be
let groups = [];
let AirQuality = [];

function preload(){ //Preloading only contains JSON related function. We need to make sure it's ready before the sketch begins
    
    const lewishamURL = "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=lewisham/Json"
    
    //List of groups
    const groupsURL = "http://api.erg.kcl.ac.uk/AirQuality/Information/Groups/Json"
    
    //Loading JSON Scripts
    hourlyJSON = loadJSON(lewishamURL)
    groupsJSON = loadJSON(groupsURL)
    
}

function setup(){
    createCanvas(1000,1000);
    background(0);
    
    groupList = groupsJSON.Groups.Group.length //List of groups
    
    for(var i = 0; i < groupList; i++)
        {
            groups[i] = groupsJSON.Groups.Group[i]
            console.log(groups)
            
            let groupNameConcat = "@GroupName"
            let GroupNameTemp = groups[i][groupNameConcat] //THIS WORKS!
            console.log(GroupNameTemp)
            
            AirQuality = hourlyJSON.HourlyAirQualityIndex[GroupNameTemp]
        }
}

function draw(){
    fill(255,255,255)
    for(var i = 0; i < groupList; i++)
        {
            fill(255,255,0)
            rect(0 + 15*i,500,15,15)
        }
}