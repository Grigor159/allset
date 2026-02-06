"use client";

import { supabase } from "@/lib/supabaseClient";
import { isValidEmail } from "@/utils/checkers";

export async function subscribe(email) {
    if (!email) {
        throw new Error("Please enter your email address.");
    }

    if (!isValidEmail(email)) {
        throw new Error("Invalid email address.");
    }

    const { error } = await supabase.from("newslater").insert([{ email }]);

    if (error) {
        throw new Error(error.message || "Something went wrong. Try again.");
    }

    return true;
}