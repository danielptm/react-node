#### How to setup react with nodejs server (Steps taken in this project)
1. Run `npx create-react-app <app-name>` to create a new react application.
2. `cd` to the react application and run `npm install express body-parser --save-dev`
3. Add a proxy to package.json `localhost:8080` so that api calls can be made to the backend.

How to develop:
1. In 1 terminal window run `npm run start` to run the react app.
2. In another terminal window run `node server.js` to start the node server.

How to run production build.
1. Run `npm run build` to build the react application.
2. Run `node server.js` to run the application and serve the react app through the server.
