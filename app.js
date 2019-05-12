const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'))
app.get('/random', function(req, res, next) {
    var ApiRes;
    var verse = req.query.verse;
    var surah = req.query.surah;
    var verseEndpoint = 'http://api.alquran.cloud/v1/ayah/'+verse+'/editions/en.pickthall'
    var surahEndpoint = 'http://api.alquran.cloud/v1/surah/'+surah+'/editions/en.pickthall'
    if(verse !== undefined){
    getRequest(verseEndpoint, res)
    }
    else{
    getRequest(surahEndpoint, res)
    }
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))



function getRequest(endpoint, response){
request(endpoint, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err);}
    response.send(body);
});
}