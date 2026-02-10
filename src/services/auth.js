"use client";

import { cookie } from "@/api/cookie";
import { error } from "@/components/ui/alerts";

export async function fetchToken(getAccessTokenSilently) {
    try {
        const token = await getAccessTokenSilently();
        cookie.set("access_token", token);
    } catch (err) {
        error(err);
    }
}