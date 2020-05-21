# Webpack Express Example App

##The goal of this repo is to make a functional app built on Express and Webpack to access the Aylien API to do text analysis of a valid URL.

##The project starts of with the following steps- using the Video Lessons 2-4 from the curriculum
   - Set up the Webpack.
   - Install Webpack.
   - Install Webpack Entry
   -  Sass Styles
   -  Install output and loaders.
   -  Install Service Workers.
   -  Istall Plugins
   -  Install Mode.
   -  Install Convenience.

## Getting up and Runnig
   - cd to the repository master branch.
	 - npm install
	 - npm i webpack webpack-cli
	 - npm i -D @babel/core @babel/preset-env babel-loader
     - npm i -D html-webpack-plugin
	 - npm i -D clean-webpack-plugin
	 - npm i -D webpack-dev-server
     - npm i -D style-loader node-sass css-loader sass-loader
     - npm install workbox-webpack-plugin --save-dev
     - npm i dotenv
     - npm install aylien_textapi
     - npm run build-prod
     - npm run start

	 - The project server is setup to run in port:8081.
	 
# Setup the Aylien API Key and SDK (sign up for the key from the aylien website)
# Setup the Environment variables to use the API Key 
     - create a .env file and add your API id and API Key using template like:
     - APP_ID = Your API ID
     - APP_KEY = Your API KEY
# Use the Aylien API to get the endpoints.
# Use service workers to make sure your app works offline when server is not listening to port.



