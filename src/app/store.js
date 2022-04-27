import { configureStore } from "@reduxjs/toolkit";
import cityWeatherReducer from "./features/cityWeather/cityWeatherSlice";
import weatherWeekReducer from "./features/cityWeather/weatherWeekSlice";
import pageReducer from "./features/page/pageSlice";
import searchReducer from "./features/searchBar/searchSlice";
import { weatherApi } from "./services/weatherApi";

export default configureStore({
  reducer: {
    page: pageReducer,
    address: searchReducer,
    cityWeather: cityWeatherReducer,
    weatherWeek: weatherWeekReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
