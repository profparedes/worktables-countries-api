# Worktables-Countries-API

Worktables-Countries-API is a project using Node.js and Express, that provides data from the Weather.api. The data from this API is intended to be used in the project Worktables-Countries-Web-App, which can be found in the following repository: https://github.com/profparedes/worktables-countries-web-app.

## Project details

This project uses Node.js and Express and is installed with Yarn. The configuration for this project is found in a file called `env.example`:
```
WEATHER_API_BASE_URL=http://api.weatherapi.com/v1
WEATHER_API_KEY=YOUR_API_KEY
```
The API key is generated at the Weather.api website: https://www.weatherapi.com/

## Download and Installation

To download and install this project, follow these steps:

1. Clone this repository to your local machine.
```
git clone https://github.com/profparedes/worktables-countries-api.git
```

2. Navigate to the project directory.
```
cd worktables-countries-api
```

3. Install the dependencies using yarn.
```
yarn install
```

4. Copy the `env.example` file and rename it to `.env`.

5. Edit the `.env` file with your Weather API key.

6. Start the project using the yarn start command.
```
yarn start
```
The server will start, and you can use the API at `localhost:3000`.