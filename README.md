## Install npm packages
First we have to install the npm package dependencies to run the node server.
Run `npm install` in order to do that.

## Start the mongo daemon service
Run `mongod` from the location of the bin folder of the installed mongoDB.

## Populate the database.
Run `node seedDB.js` to insert data into the database.

## Start the node server to listen to requests on port 3000
Run `node app.js`
