import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const id = "d094a9b2ee6918b3a5f450e4589ea2ad";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lng, unit }) =>
        `onecall?lat=${lat}&lon=${lng}&exclude=alerts&appid=${id}&units=${unit}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
