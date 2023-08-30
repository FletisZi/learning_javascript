const express = require('express');

const app = express();

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://www.twitch.tv/japagameplay11',
  'headers': {
    'Client-Id': 'jf3m5uz1o2zpd8qpf5xgjoshstmk0w',
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
//   console.log(response.headers)
  app.get('/teste',function(req,res){
        res.send(response.body)
  })
});



app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); 
    
})






app.listen(8080);