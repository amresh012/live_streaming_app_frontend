// services/streamApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from '../utils/base_url';
// Get token from localStorage (or wherever you store it)
const baseQuery = fetchBaseQuery({
  baseUrl: base_url,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token'); // you can also get from redux if you want
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const streamApi = createApi({
  reducerPath: 'streamApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createStream: builder.mutation({
      query: (streamData) => ({
        url: '/streams',
        method: 'POST',
        body: streamData,
      }),
    }),
  }),
});


export const { useCreateStreamMutation } = streamApi;
