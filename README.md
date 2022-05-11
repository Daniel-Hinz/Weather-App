# Weather App
This weather application was developed as a final project for our Spring 2022 Modern Web Application Development course. With this the user is able to get an overview of weekly weather conditions for any location around the globe. 

## Installation
In order to being using our application, the user must first navigate to the location in their terminal they would like their source code to be, and then run the following command:
`git clone https://github.com/Daniel-Hinz/Weather-App.git`

After cloning the repository install the required packages with the command: 
`npm install`

From here, the user must then create a '.env' file and populate it with both an OpenWeatherMap and an Mapbox api key, following the format.
REACT_APP_WEATHER_API_KEY = your_openweathermap_api_key
REACT_APP_LOCATION_API_KEY = your_mapboc_api_key

Finally, run the command:
`npm start`

### Usage
The user is now able to run this locally and get the weather for their desired location. The application has 3 pages, a homepage, an about page, and a forecast page. The homepage gives a broad overview of the upcoming weather in their location, the about page talks about the tools, technologies, and processes we used to create the application, and the forecast pages gives an indepth analysis of the current and upcoming weather.

### Credits
None of this could have been done without help from:

- @Terrak334
- @lmerritt47
- @smurph51
