var responseObject;

function verseCallback(response){
    responseObject = response.data[0];
    var ayahText = responseObject.text;
    var surahName = responseObject.surah.englishName  + " Verse"  + responseObject.surah.number;
    document.querySelector('.title').textContent = surahName + ": "
    document.querySelector('.text').textContent =  '"' + ayahText + '"' 
    console.log("This is the callback " + response);
}

function surahCallback(response){
    responseObject = response.data[0];
    var name = responseObject.englishName   +' - '+ responseObject.englishNameTranslation;
    var ayahs = responseObject.ayahs;
    var surahText = "";
    ayahs.forEach(function(element){
        surahText += element.text + " ";
    });
    console.log(surahText);
    document.querySelector('.title').textContent = name;
    document.querySelector('.text').textContent =   surahText;
    console.log("This is the callback " + response);
}

function httpGet(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.responseType = "json"
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.onload = function (e){
    if(xmlHttp.readyState === 4){
        if(xmlHttp.status === 200){
            callback(xmlHttp.response);
        }
        else{
            var status = Http.statusText;
        }
    }
    }
    xmlHttp.onerror = function(e){
        return xmlHttp.statusText
    
    }
    xmlHttp.send( null );
}




function generateRandom(num){
    return Math.floor(Math.random() * num) + 1;
}


document.querySelector('.ayah').addEventListener('click', function () {
    httpGet("http://localhost:3000/random?verse="+generateRandom(6236), verseCallback)
});

document.querySelector('.surah').addEventListener('click', function () {
    httpGet("http://localhost:3000/random?surah="+generateRandom(114), surahCallback)
});

//http://api.alquran.cloud/v1/ayah/"+generateRandom()+"/editions/en.pickthall

//http://api.alquran.cloud/v1/surah/114/editions/en.pickthall 