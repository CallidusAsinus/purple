# purple

![An image of the purple app, which is a button labeled with a count of "101" and the text "UPDATE"](/screenshot.PNG?raw=true "Purple")

TODOS:
* **Implement a better loading treatment for the Counter component.** Currently, the user doesn't get any feedback regarding requests to update the count. This would add substantial polish to the solution.
* **Paramaterize count keys.** Each instance of the Counter component takes in a key associating it with a count. As seen in App.tsx, multiple counters are supported. Ideally keys could be parameterized via the CLI or configuration files, allowing arbitrary numbers of counts.

Assumptions:
* The client for this app was built on top of create-react-app. This should support most features, but should more control be needed then we'll need to eject (see `npm run eject` documentation below).
* The client and server are relatively decoupled, and should further decoupling be necessary then [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) may be useful.

## Getting started

First, install dependencies with `npm i`. Check out **Available Scripts** for how to run the app.

## Docker support

Two Dockerfiles are included in this project:
* `Dockerfile` for running the app in production mode, and
* `dev.Dockerfile` for running the app in development mode

### production

The following commands will build and run the production Dockerfile:
```
docker build -t purple:prod .
docker run -p 3000:3000 purple:prod
```
### development

The following commands will build and run the development Dockerfile:
```
docker build -t purple -f dev.Dockerfile .
docker run -p 3000:3000 -p 8080:8080 purple
```

Note that development mode uses two ports, 3000 and 8080.

## Available Scripts

In the project directory, you can run:

### `NODE_ENV=production npm run start:prod`

Runs the app in production mode\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
