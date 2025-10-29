"use client"

import { Auth0Provider } from "@auth0/auth0-react";

export function AuthProvider({ children }) {
    return (
        <Auth0Provider
            domain={process.env.NEXT_PUBLIC_DOMAIN}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}>
            {children}
        </Auth0Provider>
    )
}
