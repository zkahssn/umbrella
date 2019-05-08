function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, true); 
    xmlHttp.onload = function (e){
    if(xmlHttp.readyState === 4){
        if(xmlHttp.status === 200){
            console.log(xmlHttp.responseText);
        }
        else{
            console.error(xmlHttp.statusText);
        }
    }
    }
    xmlHttp.onerror = function(e){
        console.error(xmlHttp.statusText)
    
    }
    xmlHttp.send( null );
    console.log("This is the response " + xmlHttp.responseText);
}
