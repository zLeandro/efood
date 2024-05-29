import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant, void>({
      query: () => 'restaurantes'
    }),
    getOnSale: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const { useGetFeaturedRestaurantQuery, useGetOnSaleQuery } = api

export default api
