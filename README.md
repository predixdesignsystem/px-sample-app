# Predix Design System Sample Application - Polymer 2.x

This project demonstrates best practices for building front-end web applications using the [Predix Design System](https://www.predix-ui.com/#/home/) web components with Polymer 2.x as an application framework.

This project was bootstrapped with [Polymer Starter Kit](https://github.com/Polymer/polymer-starter-kit). It includes examples of installing, loading, styling, and using PDS web components inside of Polymer app components. It also includes a build step that prepares the code for production, and an express server that can be used to deploy the app on Predix.

## File structure

The frontend code lives in the following files:

```
px-sample-app/
├── css/         (auto-generated CSS style modules files built by gulp)
│   └── ...
├── sample-data/ (JSON files to mock API endpoints)
│   └── ...
├── sass/        (SCSS styles for the app built into style modules and output in css/)
│   └── ...
├── src/         (Polymer application code)
│   └── ...
├── bower.json   (list of frontend dependencies installed with bower)
└── index.html   (entrypoint to load the frontend app in the browser)
```

The bulk of the frontend application is in `src/`. The file structure in `src/` helps keep apps organized as they scale and more features and developers are added to the project:

```
src/
├── components/               (global helper components across app shell/screens)
│   └── ...
├── screens/                  (self-contained screens usually linked to in the nav)
│   ├── alerts/               (files for a single screen)
│   │   ├── components/       (helper components used only in this screen)
│   │   │   └── ...
│   │   └── alerts-view.html  (main component for this screen)
│   └── ...
└── app-shell.html            (main component for the app, dynamically loads views/dependencies)
```

As your team adds features or flows that are broken out into a new page linked to from the navigation, create a new directory in screen and put all the related code in there. As you identify common patterns used across screens, move components from one of the screen folders to the global components folder and import it across screens.

This organization pattern is flexible, and you can change it to suite your needs. For example, add a `src/mixins` folder to hold global mixins used across screens, or add `mixins/` folders to your screens to hold mixins that are only used for a single screen.

The backend code lives in the `server/` folder, and its dependencies are installed with npm from the `package.json` file.

## How to run on your machine

### Install tools

If you don't have them already, you'll need node, bower and gulp to be installed globally on your machine.

1. Install [node](https://nodejs.org/en/download/).  This includes npm - the node package manager.
2. Install [bower](https://bower.io/) globally `npm install bower -g`
3. Install [gulp](http://gulpjs.com/) globally `npm install gulp-cli -g`

### Clone the project and install dependencies

Use git to clone the project down to your machine. Open a shell and change directory into the new project you just cloned, then install dependencies:

```
$ npm install
$ bower install
```

### Running the app locally

The gulp serve task will start a local web server and serve the code. It uses the `polymer-cli` serve command to transpile the code on the fly to work in modern browsers or older browsers that don't support ES6. Run the following command to serve the code:

```
$ gulp serve
```

The npm start task runs the sample express server to simulate running the app on Predix. In development mode the express server will serve the files from the root of the project. In production mode the express server will serve the files from `build/default`. Run the following command to start the express server:

```
$ npm start
```

## How to run in the Predix Cloud

With a few commands you can build a distribution version of the app, and deploy it to the cloud.

### Create a distribution version

The gulp dist task will create a distribution version of your frontend app, which includes transpiled and minified code that will load fast in all browsers. You will need to run this command every time before you deploy to the Cloud:

```
$ gulp dist
```

The distribution code can be found in `build/default`. Running the express server in production mode (by setting the `node_env` environment variable to `production`) will load the frontend code from that file automatically.

### Push to the Cloud

Pushing (deploying) to a cloud environment requires knowledge of the commands involved and a valid user account with the environment.  GE uses Cloud Foundry for its cloud platform.  For information on Cloud Foundry, refer to this [link](http://docs.cloudfoundry.org/cf-cli/index.html).

The simplest way to push the application to a cloud environment is by modifying the default manifest file (manifest.yml) and using the **cf push** command, as follows:

**1. Update manifest.yml**

* Change the name field in your manifest.yml.
* Uncomment the services section, and change the names to match your service instances.
* Uncomment the clientId and base64ClientCredential environment variables and enter the correct values for your UAA client.

```
---
applications:
  - name: px-sample-app
    buildpack: nodejs_buildpack
    command: node server/app.js
#services:
  # - <your-name>-secure-uaa-instance
  # - <your-name>-timeseries-instance
  # - <your-name>-asset-instance
env:
  node_env: cloud
  uaa_service_label : predix-uaa
  # Add these values for authentication in the cloud
  #clientId: {Enter client ID, e.g. app-client-id, and place it here}
  #base64ClientCredential: dWFhLWNsaWVudC1pZDp1YWEtY2xpZW50LWlkLXNlY3JldA==
```

**2. Push to the cloud**

```
cf push
```

**3. Access the cloud deployment of your application**

The output of the **cf push** command includes the URL to which your application was deployed.  Below is an example:

```
API endpoint:   https://api.endpoint.svc.ice.ge.com (API version: 2.62.0)
User:           john.doe@ge.com
Org:            predix-org
Space:          predix-space
```

Access your application by loading the **API Endpoint** above in a web browser

## Support and further information

You can ask questions and get support on the [Predix Forum](https://www.predix.io/community). If you find any bugs, have issues with the code, or want to request enhancements, file a issue on the [Github repo](http://github.com/predixdesignsystem/px-sample-app).

## Copyright

Copyright &copy; 2015, 2016, 2017 GE Global Research. All rights reserved.

The copyright to the computer software herein is the property of
GE Global Research. The software may be used and/or copied only
with the written permission of GE Global Research or in accordance
with the terms and conditions stipulated in the agreement/contract
under which the software has been supplied.
