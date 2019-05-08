var responseObject;

function callback(response){
    console.log("This is the callback " + response);
    
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true); 
    xmlHttp.responseType = "json"
    xmlHttp.onload = function (e){
    if(xmlHttp.readyState === 4){
        if(xmlHttp.status === 200){
            callback(xmlHttp.response);
            responseObject = xmlHttp.response;
            console.log(xmlHttp.response);
        }
        else{
            var weather = Http.statusText;
            //return weather;
        }
    }
    }
    xmlHttp.onerror = function(e){
        return xmlHttp.statusText
    
    }
    xmlHttp.send( null );
}



