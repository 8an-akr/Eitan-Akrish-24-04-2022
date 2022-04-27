import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "d094a9b2ee6918b3a5f450e4589ea2ad";
const unit = "metric";
// TODO: restrict key

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5",
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({ lat, lng }) =>
        `onecall?lat=${lat}&lon=${lng}&exclude=alerts&appid=${apiKey}&units=${unit}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherQuery } = weatherApi;

// https://api.openweathermap.org/data/2.5/onecall?/lat=32.0852999&lon=34.78176759999999&exclude=alerts&appid=d094a9b2ee6918b3a5f450e4589ea2ad
