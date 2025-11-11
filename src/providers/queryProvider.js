"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { persistQueryClient } from '@tanstack/react-query-persist-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const MODE = process.env.NODE_ENV

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

const persister = createAsyncStoragePersister({ storage: window.localStorage })

persistQueryClient({ queryClient, persister })

export function QueryProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {MODE === "development" && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    )
}

// old with custom sync
// "use client"

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
// import { persistQueryClientRestore, persistQueryClientSave } from '@tanstack/react-query-persist-client'

// export const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             staleTime: 1000 * 60 * 2,
//             cacheTime: 1000 * 60 * 5,
//             refetchOnWindowFocus: true,
//             refetchOnMount: true,
//         },
//     },
// })


// let persister;

// if (typeof window !== 'undefined') {
//     persister = createSyncStoragePersister({
//         storage: window.localStorage,
//     })

//     persistQueryClientRestore({
//         queryClient,
//         persister,
//     })

//     queryClient.getQueryCache().subscribe(() => {
//         persistQueryClientSave({ queryClient, persister })
//     })
// }

// queryClient.getQueryCache().subscribe(() => {
//     if (persister) {
//         persistQueryClientSave({ queryClient, persister })
//     }
// })

// export function QueryProvider({ children }) {
//     return (
//         <QueryClientProvider client={queryClient}>
//             {children}
//         </QueryClientProvider>
//     )
// }