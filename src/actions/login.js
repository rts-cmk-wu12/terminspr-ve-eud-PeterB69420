"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import * as z from "zod";


export default async function LoginAction(formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    const schema = z.object({
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        password: z.string().min(1, { message: "Password skal være udfyldt" }),
    });

    const validated = schema.safeParse({ username, password });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error)),
    };

    const response = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validated.data),
    });

    if (!response.ok) return {
        success: false,
        errors: ["Brugernavn eller password er forkert"],
    };

    const data = await response.json();

    const remember = formData.get("remember")

    const cookieStore = await cookies();
    const cookieOptions = {
        maxAge: remember ? 60 * 60 * 24 * 30 : 60 * 60,
        httpOnly: true,
        path: "/"
    }
    

    cookieStore.set("auth_token", data.token, cookieOptions);
    cookieStore.set("user_id", data.userId.toString(), cookieOptions);
    cookieStore.set("user_role", data.role, cookieOptions);

    redirect("/activities");

}
