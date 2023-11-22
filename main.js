const express = require('express')
const handlers = require('./lib/handler')
const app = express();
const path = require('path')
const port = process.env.PORT || 5000

// Set the ejs as the ' View Engine '
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname + "public")))
  
app.get('/', handlers.home)
app.get('/about', handlers.about)

// custom 404 page
app.use(handlers.notfound)

// custom 500 page
app.use(handlers.serverError)

if (require.main === module) { 
  // require.main is reffer to the main script in packje.json which is priorily the main script 
  // And the module refers to the this file which is called module for this file .

  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.')
  })
} else {
  module.exports = app
}