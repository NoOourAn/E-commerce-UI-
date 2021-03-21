const express = require('express')
const app = express()
const port = 8080

//set up static files
app.use(express.static('./dist/maketo-shopping-mall')) 

//general path
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/maketo-shopping-mall/'});
});

app.listen(process.env.PORT || port)