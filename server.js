//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/TVSchedule'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/TVSchedule/index.html'));
});

// Start the app by listening on the default Heroku port

const PORT = process.env.PORT || 8080;
app.listen(PORT,(err)=>{
    if(err)
    console.log(err);

    console.log("App listening to %d",PORT);
    
    
});