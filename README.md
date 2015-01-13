# node-express-mongoose-demo

Client application illustrating dynamic content update via socket.io - cloud. 

## How to use. 

```
$ cd node-express-mongoose-demo
$ npm install
$ npm run start
...




Observing dynamic content updates - Once the server is running, connect to 'http://localhost:3000' in two tabs on your browser. Sign in as new user on one of the tabs. Once signed in click new again in the same tab to add a new article. Add data to title, body and tags fields and click save. Navigate back to the other instance of localhost:3000'. The newly added article should display without having to reload the page. 


App functionality - client-server sends request to socket.io-cloud which emits the data back to the client app 



****** ensure socket.io-cloud is up and running prior to sending requests *****