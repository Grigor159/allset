"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import baseApi from "../services/api/baseApi";

export const useGetTanstack = (name) => {
    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const { data } = await baseApi.get(`${name}`);
            return data;
        },
    });
};

export const usePostTanstack = (name, options) => {
    return useMutation({
        mutationFn: async (body) => {
            const { data } = await baseApi.post(`${name}`, body);
            return data;
        },
        ...options,
    });
};