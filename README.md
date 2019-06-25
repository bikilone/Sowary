# PalmHR Test Project
## Sowary

To run the api server first install the dependencies with
```
yarn install
```
or
```
npm install
```
If you are using windows OS, you need to manualy go to the server dir and install the dependencies
```
cd server
npm install
```

Than to start the server run
```
yarn start-server
```
or
```
npm run start-server
```
or
```
node server/index.js
```

The server will be runing on port 5000. There are two routes:
* GET [http://localhost:5000/pictures](http://localhost:5000/pictures) which will return json response with the list of images.
* GET [http://localhost:5000/picture/image-name](http://localhost:5000/picture/image-name) which will return img response with the selected image (this uri is in the json response of the first route)

The server runs independently of client code, but the routes in your code need to target uri listed above.

Write all of the code in the client folder, there you can install all of the dependencies with its independant package.json

**Please fill out README.md in the client folder, projects without instructions on how to build and run the project will not be reviewed.**

You can find the prototype on [https://share.goabstract.com/8ab85ded-4fd7-4b76-b374-ca57650b49a0](https://share.goabstract.com/8ab85ded-4fd7-4b76-b374-ca57650b49a0)
