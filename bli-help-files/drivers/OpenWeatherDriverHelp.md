OpenWeatherDriver
=================

This driver access current weather data for any location including over 200,000 cities.  
It gets information from [OpenWeather's API](http://openweathermap.org/api "OpenWeather's API") and leaves it available for use by the BeoLiving Intelligence.


Resources
---------

The supported resource types are:

 + **_CURRENT_WEATHER**: current weather data.
 + **_WEATHER_FORECAST_3HRS**: forecast for the next 3 hours.
 + **_WEATHER_FORECAST_24HRS**: forecast for the next 24 hours.


Resource address format
-----------------------

The resource address consists of a string that represents the coordinates of the location from which you want to get information about the weather.  
The format is: `latitude:longitude` (e.g. -34.896579:-56.071827)

Resource State
--------------

 + _CURRENT_WEATHER
   - **_Temperature**: temperature at the moment (Celsius).
   - **_Min_Temperature**: Minimum temperature at the moment (Celsius).
   - **_Max_Temperature**: Maximum temperature at the moment (Celsius).
   - **_Humidity**: Percentage of humidity.
   - **_Pressure**: Atmospheric pressure (hPa).
   - **_WindSpeed**: Wind speed (m/s).
   - **_WindDirection**: Wind direction, degrees (meteorological).
   - **_Cloudiness**: Percentage of cloudiness.
   - **_Rain**: True if it is rainning, false otherwise.
   - **_RainLevel3Hrs**: Rain volume for the next 3 hours (milimeters).
   - **_Snow**: True if it is snowing, false otherwise.
   - **_SnowLevel3Hrs**: Snow volume for the next 3 hours (milimeters).

 + _WEATHER_FORECAST_3HRS
   - **_Temperature**: temperature at the moment of calculation (Celsius).
   - **_Min_Temperature**: Minimum temperature at the moment of calculation (Celsius).
   - **_Max_Temperature**: Maximum temperature at the moment of calculation (Celsius).
   - **_Humidity**: Percentage of humidity.
   - **_Pressure**: Atmospheric pressure (hPa).
   - **_WindSpeed**: Wind speed (m/s).
   - **_WindDirection**: Wind direction, degrees (meteorological).
   - **_Cloudiness**: Percentage of cloudiness.
   - **_Rain**: True if it will rain, false otherwise.
   - **_RainLevel3Hrs**: Rain volume for the next 3 hours (milimeters).
   - **_Snow**: True if it will snow, false otherwise.
   - **_SnowLevel3Hrs**: Snow volume for the next 3 hours (milimeters).

 + _WEATHER_FORECAST_24HRS
   - **_Min_Temperature**: Min daily temperature (Celsius).
   - **_Max_Temperature**: Max daily temperature (Celsius).
   - **_Humidity**: Percentage of humidity.
   - **_Pressure**: Atmospheric pressure (hPa).
   - **_WindSpeed**: Wind speed (m/s).
   - **_WindDirection**: Wind direction, degrees (meteorological).
   - **_Cloudiness**: Percentage of cloudiness.
   - **_Rain**: True if it will rain, false otherwise.
   - **_RainLevel3Hrs**: Rain volume (milimeters).
   - **_Snow**: True if it will snow, false otherwise.
   - **_SnowLevel3Hrs**: Snow volume (milimeters).






