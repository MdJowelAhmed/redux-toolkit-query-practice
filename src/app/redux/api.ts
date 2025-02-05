import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi", 
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/posts",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Array<{ id: number; title: string }>, void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi; 
