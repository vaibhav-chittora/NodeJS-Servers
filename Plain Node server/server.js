const http = require("http"); // importing the http module(nodeJS internal module)
const PORT = 3000; //port number

const server = http.createServer((req, res) => {
  console.log("server is running");

  if (req.url === "/") {
    //requesting the url
    res.write("welcome to the Plain node server");
  } else if (req.url === "/about") {
    res.write("welcome to the about page");
  } else {
    res.write("404 page not found");
  }

  res.end(); //end the response
});

//listen to the port to start the server
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
