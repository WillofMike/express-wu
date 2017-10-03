var express = require('express')
var app = express();

app.listen(3000, function(){
  console.log('hi');
})

app.get('/',function(request, response) {
  response.send('Hello again')
})
