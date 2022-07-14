const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          body{
              margin:0;
              padding:0;
          }
          #wrapper{
              border: 0px solid black;
              width: 1000px;
              margin: 0 auto;
          }
          #header{
              background-color: crimson;
              height: 100px;
              color: white;
              margin-top: 0;
          }
  
          #header h1{
              padding:30px 0 0 20px;
          }
          #menu{
              background-color: chocolate;
          }
        
          #menu li{
              display: inline-block;
          }
          #menu li a{
              display: block;
              padding: 10px 13px;
              text-decoration: none;
              color:black;
              font-weight: bold;
          }
  
          #menu li a:hover{
              background-color: crimson;
              color:white;
          }
          #content{
              width: 800px;
              float: left;
              min-height: 500px;
              box-sizing: border-box;
              background-color: lime;
              padding:10px;
          }
          #sidebar{
              background-color: lightblue;
              width:200px;
              min-height: 500px;
              float: right;
          }
  
          #sidebar li{
              padding-left:10px;
          }
  
          #sidebar a{
              text-decoration: none;
              color:black;
          }
  
          #footer{
              background-color:chocolate;
              clear: both;
              text-align: center;
              padding:5px 10px;
          }
      </style>
  </head>
  <body>
      <div id="wrapper">
          <div id="header">
              <h1>This is header</h1>
          </div>
          <div id="menu">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Contact</a></li>
          </div>
          <div id="content">
              <h2>Layout Design</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ratione dolores, enim accusantium id placeat consequatur maiores odit reprehenderit nam porro ad nemo at ducimus modi dolore doloremque ipsa cum! Earum illo distinctio inventore nemo?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ratione dolores, enim accusantium id placeat consequatur maiores odit reprehenderit nam porro ad nemo at ducimus modi dolore doloremque ipsa cum! Earum illo distinctio inventore nemo?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ratione dolores, enim accusantium id placeat consequatur maiores odit reprehenderit nam porro ad nemo at ducimus modi dolore doloremque ipsa cum! Earum illo distinctio inventore nemo?</p>
          </div>
          <div id="sidebar">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Contact</a></li>
          </div>
          <div id="footer">
              &copy; YourwebsiteName.com 2022 | All Rights Reserved
          </div>
      </div>
  </body>
  </html>

  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});