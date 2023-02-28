# Wei Weather App Version 0.1.0


## Please follow the procedure in sequence.


1. Clone the project file and place it on your local repository.

2. In the project directory you can run  `npm install` to install all         packaged dependencies.

3. In the **.env.local** file on the root directory, you can change the value of the REACT_APP_API_KEY with your api key.

4. Run `npm start` on the terminal 

5. Typically you will open the app at [http://localhost:3000](http://localhost:3000) .It will open on a different port if port 3000 is in use.

## APP Feature

1. On first screen load, you'll not see the UI but you will be asked to enter the City in which you want to see the weather forecast.

2. The App will show you the current weather forecast, and the next 4 days temperature and forecast icons.

3. If you will enter an empty string, your request will never be forwarded.

4. If you will enter an unknown city, it will show you a 404 component inside the card.

## Possible Improvement

1. Implement a night/dark mode feature in which it will fetch the night time forecast and change all the info into night time data

2. Get the geolocation of the device accessing the app and during the app first load it will show the weather forecast of that device' location.


### Tech Stack and Tools Used

1. React JS
2. Typescript
3. Tailwind CSS
4. Moment JS
5. React Spinners
