"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/apiClient";
// import { getAxiosConfig } from "@/lib/config";
import { useAuth0 } from "@auth0/auth0-react";

export const useGetTanstack = (name, scope) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    return useQuery({
        queryKey: [name],
        // queryFn: async () => {
        //     const config = getAxiosConfig()
        //     const { data } = await apiClient.get(`${name}`, config);
        //     return data;
        // },
        queryFn: async () => {
            if (!isAuthenticated) throw new Error("User not authenticated");

            const token = await getAccessTokenSilently({
                audience: process.env.NEXT_PUBLIC_API_AUDIENCE,
                scope: `get:${scope}`
            });

            const { data } = await apiClient.get(name, {
                headers: { Authorization: `Bearer ${token}` },
            });

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