var app = require('express')()


app.get('/', function (req, res) {

var err = new Error('Error generated')

//error generated and captured
apm.captureError(err)
 
res.send('Hello Elastic Lovers')

 
 //created error without capture
 my_error()

  
})

app.listen(3000, () => console.log('Server running on port 3000'))