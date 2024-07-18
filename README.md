SETTING UP IWP PROJECT WAVES


<!-- Technologies used in this project -->

Done server side coding on the basis of REST API

Technology 1:For front end used React front end frame work
link: https://reactjs.org/docs/getting-started.html

Technology 2: For backend used express js framework for server side coding
link: https://expressjs.com/

Database:MongoDB

<!-- Running our project -->

Requirements:
Node js and mongoDB should be locally installed in our system 

step:1 Open project folder in terminal type:"npm install" in terminal without quotes it will   install the required dependencies that are in package.json file

step:2 go to client directory in terminal now again install react and frontend dependencies using npm install

step:3 Now all the dependencies are installed
->Open two terminals
In terminal one run sever using following commands
if nodemon is installed in system:
        npm run server
else goto server directory and run node server.js

->In the second terminal
Running react server
go to client directory in terminal and type npm start

Now both are started it automatically pops up default browser page
if not type localhost:3002 in search bar
Now the home page will open

*****************IMP***********
<!-- As we are using two servers we use axios because as react run on the development server we cannot make requests to another server from a server
it mean we have to have only one server
 -->






