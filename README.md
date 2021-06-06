# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

# Steps for deployment of app with continuous integration (CI) and continuous deployment (CD) with Azure DevOps

-Create a project in your Azure DevOps organization.\
-Navigate to repo's tab and create a new repo with Git project. Select clone button to clone the project to local directory. Commit and push your app to Azure DevOps repo.\
-In order to have CI and CD throught Azure DevOps we have to setup a new pipeline. Click on pipelines and create a new one with an empty job. Select Azure repos git - select repo for this project - select Node.js with React to generate a new yaml file.\
-Choose Agent job and add npm tasks for install and run build.\
-Create an App service to deploy React app.\
-Go to pipelines and create a new release.\
-Choose deploying with Azure App Service Deployment.\ After it's finished, you can click on the newly created app service to see the details.\ If you click on the URL, you will be able to see it live.\
-Name stage use something like 'Production' and add artifact and choose pipeline and artifact that was generated when you run pipeline.\
-Click on the job task under stage and select Deploy Azure App Service.\
-Create Service connection - Azure Resource Manager and fill up with your organization data.\
-Go on release tab and finish up the process.\
-From created pipeline create a release.\
-Visit the Azure web app URL and you can see the app deployed.
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
