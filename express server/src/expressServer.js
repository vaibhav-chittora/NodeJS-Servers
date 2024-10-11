import express from 'express' // importing the express module using ES6 import syntax

const PORT = 3000; //port number
const app = express() // creating the express server which gives us the app object

//creating the routes using the app.get method
app.get('/', (req, res) => {
    res.send("Welcome to home Page,this server is built using express") //sending the response as a string
})

app.get('/about', (req, res) => {
    res.json({ id: 1, type: "Express Server" }) //sending the response as a json object
})


//if the url is not found then it will send the 404 error
app.get('/*', (req, res) => {
    //handling the 404 error
    res.send("ERROR 404 - PAGE NOT FOUND")
})

//listen to the port to start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
