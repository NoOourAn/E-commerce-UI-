const express = require('express')
const app = express()
const port = 4200

//set up static files
app.use(express.static('./dist/my-app')) 

//general path
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/my-app/'});
});

app.listen(process.env.PORT || port)