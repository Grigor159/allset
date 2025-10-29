"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { persistQueryClientRestore, persistQueryClientSave } from '@tanstack/react-query-persist-client'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 2,
            cacheTime: 1000 * 60 * 5,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
        },
    },
})


let persister;

if (typeof window !== 'undefined') {
    persister = createSyncStoragePersister({
        storage: window.localStorage,
    })

    persistQueryClientRestore({
        queryClient,
        persister,
    })

    queryClient.getQueryCache().subscribe(() => {
        persistQueryClientSave({ queryClient, persister })
    })
}

queryClient.getQueryCache().subscribe(() => {
    if (persister) {
        persistQueryClientSave({ queryClient, persister })
    }
})

export function QueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
