import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../config';
import { IModelCard } from '../components/modelCard/ModelCard';
import { IFullModelCard } from '../pages/fullModelPage/FullModelPage';

type TOnePageQuery = {
    sortParam?: string;
    page?: string;
};

type IResponceData = {
    page: number
    totalPages: number | undefined
    transformedPosts: IModelCard[]
};

// Define a service using a base URL and expected endpoints
export const modelsApi = createApi({
    reducerPath: 'modelsApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getModelById: builder.query<IFullModelCard, string>({
            query: (id) => `/model/${id}`,
        }),
        getAllModels: builder.query<IResponceData, TOnePageQuery>({
            query: ({ sortParam, page }) => `/api/models?sort=${sortParam}&page=${page}`,


        }),
    }),
})

export const { useGetAllModelsQuery, useGetModelByIdQuery } = modelsApi