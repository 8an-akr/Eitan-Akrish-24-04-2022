import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "d094a9b2ee6918b3a5f450e4589ea2ad";
// TODO: restrict key

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lng, unit }) =>
        `onecall?lat=${lat}&lon=${lng}&exclude=alerts&appid=${apiKey}&units=${unit}`,
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
