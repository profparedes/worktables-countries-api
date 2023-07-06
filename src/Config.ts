import 'dotenv/config';

const Config = {
    app: {
        port: process.env.PORT || 3000
    },
    api: {
        baseUrl: process.env.WEATHER_API_BASE_URL,
        key: process.env.WEATHER_API_KEY
    }
}

export default Config;