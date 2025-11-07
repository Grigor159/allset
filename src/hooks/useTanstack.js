"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";

export const useGetTanstack = (name) => {
    return useQuery({
        queryKey: [name],
        queryFn: async () => {
            const { data } = await apiClient.get(`${name}`);
            return data;
        },
    });
};

export const usePostTanstack = (name, options) => {
    return useMutation({
        mutationFn: async (body) => {
            const { data } = await apiClient.post(`${name}`, body);
            return data;
        },
        ...options,
    });
};