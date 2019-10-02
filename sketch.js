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
let viewInfoArray = [];

let airQualityIndexResults = [];

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
            groups[i] = groupsJSON.Groups.Group[i] //Gives me the group name
            console.log(groups)
            
            let groupNameConcat = "@GroupName"
            let GroupNameTemp = groups[i][groupNameConcat] //THIS WORKS!
            console.log("@" + GroupNameTemp)
            
            AirQuality = hourlyJSON.HourlyAirQualityIndex[GroupNameTemp]
            
            console.log(AirQuality)
            let changingURL = "http://api.erg.kcl.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName="+GroupNameTemp+"/Json"
            
            viewInfoArray[i] = loadJSON(changingURL) //Puts the group names into an array of objects where we can mantiuplate the data
            
//            console.log(viewInfoArray)
            
            //Find the length of the species, site and local authority and throw that into the mix
            //[8].HourlyAirQualityIndex.LocalAuthority[""0""].Site[""0""].Species[""0""][""@AirQualityIndex""]
            
        }
    
    for(var i = 0; i < viewInfoArray.length; i++)
        {
//            console.log(viewInfoArray[i])
//
//            console.log(viewInfoArray)
        }
    
    let textTest = 'HourlyAirQualityIndex'
    console.log(viewInfoArray[0])
    console.log(viewInfoArray[0])
    
    let testVar = viewInfoArray[0]['HourlyAirQualityIndex']
    
    console.log(testVar)
}

function draw(){
    fill(255,255,255)
    for(var i = 0; i < groupList; i++)
        {
            fill(255,255,0)
            rect(0 + 15*i,500,15,15)
        }
}