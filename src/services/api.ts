import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurant } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  products: {
    id: number
    price: number
  }[]
}

type PurchasePayload2 = {
  payment: {
    card: {
      name: string
      number: string
      code: string
      expires: {
        month: string
        year: string
      }
    }
  }
  products: {
    id: number
    price: number
  }[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant, void>({
      query: () => 'restaurantes'
    }),
    getOnSale: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    }),
    purchase2: builder.mutation<any, PurchasePayload2>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetOnSaleQuery,
  usePurchaseMutation,
  usePurchase2Mutation
} = api

export default api
